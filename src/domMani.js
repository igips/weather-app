import { dayHourDiv, formatDateForHourly, formatDateForWeekly } from "./getElements";

function createContainerForWeeklyHourly(data, time) {
	const container = document.createElement("div");
	container.setAttribute("class", "daily-disp");

	const day = document.createElement("p");
	if (data.moonrise !== undefined) {
		day.textContent = formatDateForWeekly(data, time);
	} else {
		day.textContent = formatDateForHourly(data, time);
	}

	const img = document.createElement("img");
	img.setAttribute("class", "wek-day-img");
	img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

	const temp = document.createElement("p");
	temp.setAttribute("class", "day-night-para");
	const dayTemp = document.createElement("span");
	dayTemp.setAttribute("class", "day-temp-weekly");

	if (data.moonrise !== undefined) {
		dayTemp.textContent = Math.round(data.temp.day) + "°";
		const nightTemp = document.createElement("span");
		nightTemp.setAttribute("class", "night-temp-weekly");
		nightTemp.textContent = Math.round(data.temp.night) + "°";
		temp.appendChild(dayTemp);
		temp.appendChild(nightTemp);
	} else {
		dayTemp.textContent = Math.round(data.temp) + "°";
		temp.appendChild(dayTemp);
	}

	container.appendChild(day);
	container.appendChild(img);
	container.appendChild(temp);

	dayHourDiv.appendChild(container);
}

export { createContainerForWeeklyHourly };
