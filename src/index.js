import {   celcButton, cityDisp, fahButton, locationInput, notFound, searchButton, units } from "./getElements";
import { getData, getLocationFromIp, } from "./modules/weatherData";
import "./style.css";

getLocationFromIp();

searchButton.addEventListener("click", () => {
    notFound.textContent = "";
    if(locationInput.value !== "") {
        getData(locationInput.value, units);
    }
    locationInput.value = "";
});

fahButton.addEventListener("click", () => {
    units.a = "imperial";
    celcButton.style.color = "gray";
    fahButton.style.color = "white";
    getData(cityDisp.textContent, units);
});

celcButton.addEventListener("click", () => {
    units.a = "metric";
    fahButton.style.color = "gray";
    celcButton.style.color = "white";
    getData(cityDisp.textContent, units);
});


