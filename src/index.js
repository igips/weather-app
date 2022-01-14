import {   celcButton, cityDisp,  dailyButton,  dot1,  dot2,  dot3,  fahButton, hourlyButton, hourlyStartEnd, leftArrow, locationInput, notFound, rightArrow, searchButton, sliderDiv, units } from "./modules/getElements";
import { getData, getLocationFromIp, } from "./modules/weatherData";
import "./style.css";

getLocationFromIp();

searchButton.addEventListener("click", () => {
    event.preventDefault();
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

rightArrow.addEventListener("click", () => {
    if(dot1.style.background === "white") {
        dot1.style.background = "none";
        dot2.style.background = "white";
        hourlyStartEnd.start = 9;
        hourlyStartEnd.end = 17;
        getData(cityDisp.textContent, units);

    } else if(dot2.style.background === "white") {
        dot2.style.background = "none";
        dot3.style.background = "white";
        hourlyStartEnd.start = 17;
        hourlyStartEnd.end = 25;
        getData(cityDisp.textContent, units);

    } else if(dot3.style.background === "white") {
        dot3.style.background = "none";
        dot1.style.background = "white";
        hourlyStartEnd.start = 1;
        hourlyStartEnd.end = 9;
        getData(cityDisp.textContent, units);
    }
    
});

leftArrow.addEventListener("click", () => {
    if(dot1.style.background === "white") {
        dot1.style.background = "none";
        dot3.style.background = "white";
        hourlyStartEnd.start = 17;
        hourlyStartEnd.end = 25;
        getData(cityDisp.textContent, units);

    } else if(dot2.style.background === "white") {
        dot2.style.background = "none";
        dot1.style.background = "white";
        hourlyStartEnd.start = 1;
        hourlyStartEnd.end = 9;
        getData(cityDisp.textContent, units);

    } else if(dot3.style.background === "white") {
        dot3.style.background = "none";
        dot2.style.background = "white";
        hourlyStartEnd.start = 9;
        hourlyStartEnd.end = 17;
        getData(cityDisp.textContent, units);
    }
    
});

hourlyButton.addEventListener("click", () => {
    dailyButton.style.border = "none";
    hourlyButton.style.border = "solid 2px white";
    sliderDiv.style.display = "flex";
    getData(cityDisp.textContent, units);

});

dailyButton.addEventListener("click", () => {
    hourlyButton.style.border = "none";
    dailyButton.style.border = "solid 2px white";
    sliderDiv.style.display = "none";
    dot1.style.background = "white";
    dot2.style.background = "none";
    dot3.style.background = "none";
    hourlyStartEnd.start = 1;
    hourlyStartEnd.end = 9;
    getData(cityDisp.textContent, units);
});

window.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        searchButton.click();
    }
});


