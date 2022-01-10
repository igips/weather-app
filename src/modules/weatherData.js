async function getData() {
	try {
		const response = await fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=Warsaw&units=metric&appid=44098f566b2b4ad2174ce20544566f10",
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
	} catch (error) {
		console.error(error);
	}
}

export { getData };
