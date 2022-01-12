const cityDisp = document.getElementById("city");
const dateDisp = document.getElementById("date");
const weatherDisp = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const degDisp = document.getElementById("deg");
const degreeTypeDisp = document.getElementById("deg-sym");
const searchButton = document.getElementById("search-button");
const locationInput = document.getElementById("loc-input");
const notFound = document.getElementById("not-found");
const celcButton = document.getElementById("celc");
const fahButton = document.getElementById("fah");
const units = {a: "metric"};
const feelsDeg = document.getElementById("feels-deg");
const humi = document.getElementById("humi");
const chRain = document.getElementById("ch-rain");
const winSpeed = document.getElementById("win-speed");


function formatDate(data) {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};
	options.timeZone = data.timezone;

	const today = new Date();

	return today.toLocaleDateString("en-GB", options);
}

export {
	cityDisp,
	dateDisp,
	weatherDisp,
	weatherIcon,
	degDisp,
	degreeTypeDisp,
	searchButton,
	locationInput,
	formatDate,
	notFound,
	celcButton,
	fahButton,
    units,
    feelsDeg,
    humi,
    chRain,
    winSpeed
    
};
