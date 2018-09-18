import {API_KEY} from './WeatherApiKey';

const getWeather = () => {
    var url =`https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,VN&appid=${API_KEY}`;
    return fetch(url).then((res) =>res.json());
}

const weather = [
    {
        icon: require('../images/icon/ic_rain_probability.png'),
    },
]

export {weather, getWeather};