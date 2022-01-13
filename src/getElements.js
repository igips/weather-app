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
const units = { a: "metric" };
const feelsDeg = document.getElementById("feels-deg");
const humi = document.getElementById("humi");
const chRain = document.getElementById("ch-rain");
const winSpeed = document.getElementById("win-speed");
const dayHourDiv = document.getElementById("day-hour-disp");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const hourlyStartEnd = {start: 1, end: 9};
const dailyButton = document.getElementById("daily-b");
const hourlyButton = document.getElementById("hourly-b");
const sliderDiv = document.getElementById("slide-div");

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

function formatDateForWeekly(data, time) {
	const options = { weekday: "long" };

	options.timeZone = time;

	const day = new Date(data.dt * 1000);

	return day.toLocaleDateString("en-GB", options);
}

function formatDateForHourly(data, time) {
	const options = { hour: "2-digit", minute: "2-digit" };
	options.timeZone = time;

	const day = new Date(data.dt * 1000);

	return Intl.DateTimeFormat("en-GB", options).format(day);
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
	winSpeed,
	dayHourDiv,
	formatDateForWeekly,
	formatDateForHourly,
    leftArrow,
    rightArrow,
    dot1,
    dot2,
    dot3,
    hourlyStartEnd,
    dailyButton,
    hourlyButton,
    sliderDiv
};
