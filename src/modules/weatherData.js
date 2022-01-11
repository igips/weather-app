import { cityDisp, dateDisp, degDisp,  degreeTypeDisp,  formatDate, weatherDisp, weatherIcon } from "../getElements";

async function getData(location) {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=44098f566b2b4ad2174ce20544566f10`,
			{ mode: "cors" }
		);

		const weatherData = await response.json();

		const response2 = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&units=metric&exclude=minutely&appid=eb4471bdabda01d6272045a4556b91c1`,
			{ mode: "cors" }
		);
		const weatherData2 = await response2.json();
	
		console.log(weatherData);
		console.log(weatherData2);
		displayWeather(weatherData, weatherData2);
	} catch (error) {
		console.error(error);
	}
}

function displayWeather(data1, data2) {
	cityDisp.textContent = data1.name;
	dateDisp.textContent = formatDate();
	weatherDisp.textContent = data1.weather[0].description;
	weatherIcon.src = `http://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`;
	degDisp.textContent = Math.round(data1.main.temp);
	degreeTypeDisp.textContent = "°C";
}

async function getLocationFromIp() {
    try{
        const response = await fetch("http://ip-api.com/json/", {mode: "cors"});
        const location = await response.json();
        
        getData(location.city);

    } catch (error) {
        console.error(error);
    }
    
    
}

export { getData, getLocationFromIp };
