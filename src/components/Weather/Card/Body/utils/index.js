export const FetchWeatherInfo = (data) => {
    const { weather } = data?.getCityById[0];
    const date = new Date(weather?.timestamp * 1000)
    const currentDate = date.toLocaleString('en-US', { month: "long", year: "numeric", day: "numeric", weekday: 'long'});
    const weatherForecast = `${weather?.summary.title}`;
    const kelvinToCelcius = (weather?.temperature.actual - 273.15).toFixed(1);

    return {
        date: currentDate,
        degree: kelvinToCelcius,
        icon: weather.summary.icon,
        weatherForecast,
    }
}
