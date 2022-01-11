import {  locationInput, searchButton } from "./getElements";
import { getData, getLocationFromIp, } from "./modules/weatherData";
import "./style.css";

getLocationFromIp();

searchButton.addEventListener("click", () => {
	getData(locationInput.value);
	locationInput.value = "";
});
