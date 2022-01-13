import { dayHourDiv, formatDateForWeekly } from "./getElements";

function createContainerForWeekly(data, time) {
	const container = document.createElement("div");
	container.setAttribute("class", "daily-disp");

	const day = document.createElement("p");
	day.textContent = formatDateForWeekly(data, time);

	const img = document.createElement("img");
	img.setAttribute("class", "wek-day-img");
	img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

	const temp = document.createElement("p");
	temp.setAttribute("class", "day-night-para");
	const dayTemp = document.createElement("span");
	dayTemp.setAttribute("class", "day-temp-weekly");
	dayTemp.textContent = Math.round(data.temp.day);
	const nightTemp = document.createElement("span");
	nightTemp.setAttribute("class", "night-temp-weekly");
	nightTemp.textContent = Math.round(data.temp.night);
	temp.appendChild(dayTemp);
	temp.appendChild(nightTemp);

	container.appendChild(day);
	container.appendChild(img);
	container.appendChild(temp);

	dayHourDiv.appendChild(container);
}

export {createContainerForWeekly}