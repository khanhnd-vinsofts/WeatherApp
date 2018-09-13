const currentWeatherData = function(){
    var url = `https://api.openweathermap.org/data/2.5/find?q=Hanoi&units=imperial&appid=d6745886b50f6d836e68b3d5e6e87f0f`;
    return fetch(url).then((res) => res.json());
}

export default currentWeatherData;