const getWeather = () => {
    var url =`https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,VN&appid=e870504be89c778223b86a5adf8d4abd`;
    return fetch(url).then((res) =>res.json());
}



const weather = [
    {
        icon: require('../images/icon/ic_rain_probability.png'),
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    },
    {
        icon: require('../images/icon/ic_rain_probability.png'),
        
    }
]

export {weather, getWeather};