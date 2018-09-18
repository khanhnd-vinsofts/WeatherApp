import {API_KEY} from './WeatherApiKey';

const getData = () => {
    var url = `https://api.openweathermap.org/data/2.5/find?q=hanoi&units=metric&appid=${API_KEY}`;
    return fetch(url).then((res) => res.json());
}

export default getData;