import { createContainerForWeeklyHourly } from "../domMani";
import {
	chRain,
	cityDisp,
	hourlyStartEnd,
	dateDisp,
	dayHourDiv,
	degDisp,
	degreeTypeDisp,
	feelsDeg,
	formatDate,
	humi,
	notFound,
	units,
	weatherDisp,
	weatherIcon,
	winSpeed,
	dailyButton,
} from "../getElements";

async function getData(location, uni) {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${uni.a}&appid=44098f566b2b4ad2174ce20544566f10`,
			{ mode: "cors" }
		);
		if (!response.ok) {
			throw new Error("404");
		}

		const weatherData = await response.json();

		const response2 = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=${uni.a}&exclude=minutely&appid=eb4471bdabda01d6272045a4556b91c1`,
			{ mode: "cors" }
		);
		const weatherData2 = await response2.json();

		console.log(weatherData);
		console.log(weatherData2);
		displayWeather(weatherData, weatherData2);
	} catch (error) {
		if (error.message === "404") {
			notFound.textContent = "Location not found!";
		} else {
			console.error(error);
		}
	}
}

function displayWeather(data1, data2) {
	cityDisp.textContent = data1.name;
	dateDisp.textContent = formatDate(data2);
	weatherDisp.textContent = data1.weather[0].description;
	weatherIcon.src = `http://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`;
	degDisp.textContent = Math.round(data1.main.temp);
	degreeTypeDisp.style.display = "flex";
	document.getElementById("extra-container").style.display = "flex";
	displayDegFeels(data1);
	humi.textContent = data1.main.humidity + " %";
	chRain.textContent = data2.hourly[0].pop + " %";
	displayWindSpeed(data1);
	document.getElementById("bottom").style.display = "flex";
	if(dailyButton.style.border !== "none") {
		displayWeekly(data2);

	} else {
		displayHourly(data2);
	}
	
	
}

function displayWeekly(data) {
	dayHourDiv.textContent = "";
	const timeZone = data.timezone;
	for (let i = 1; i < data.daily.length; i++) {
		createContainerForWeeklyHourly(data.daily[i], timeZone);
	}
}

function displayHourly(data) {

	dayHourDiv.textContent = "";
	const timeZone = data.timezone;
	for (let i = hourlyStartEnd.start; i < hourlyStartEnd.end; i++) {
		createContainerForWeeklyHourly(data.hourly[i], timeZone);
	}
}

function displayDegFeels(data) {
	if (units.a === "metric") {
		feelsDeg.innerHTML = `${Math.round(data.main.feels_like)}<div id='feels-temp'>°C</div>`;
	} else {
		feelsDeg.innerHTML = `${Math.round(data.main.feels_like)}<div id='feels-temp'>°F</div>`;
	}
}

function displayWindSpeed(data) {
	if (units.a === "metric") {
		winSpeed.textContent = data.wind.speed + " km/h";
	} else {
		winSpeed.textContent = data.wind.speed + " mph";
	}
}

async function getLocationFromIp() {
	try {
		const response = await fetch("http://ip-api.com/json/", { mode: "cors" });
		const location = await response.json();

		getData(location.city, units);
	} catch (error) {
		console.error(error);
	}
}

export { getData, getLocationFromIp };
