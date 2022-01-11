const cityDisp = document.getElementById("city");
const dateDisp = document.getElementById("date");
const weatherDisp = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const degDisp = document.getElementById("deg");
const degreeTypeDisp = document.getElementById("deg-sym");
const searchButton = document.getElementById("search-button");
const locationInput = document.getElementById("loc-input");

function formatDate() {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};

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
   
};
