import React from 'react'
import '../style.scss'

const WeatherCardBody = ({ data: { weather } }) => {
    const iconLink = "http://openweathermap.org/img/w"
    const date = new Date(weather?.timestamp * 1000)
    const currentDate = date.toLocaleString('en-US', { month: "long", year: "numeric", day: "numeric", weekday: 'long'});
    const weatherForecast = `${weather?.summary.title}`;
    const kelvinToCelcius = (weather?.temperature.actual - 273.15).toFixed(1);

    return <>
            <p className="icon" >
                <img alt="icon" src={`${iconLink}/${weather?.summary.icon}.png`} />
            </p>
            <p>{ currentDate }</p>
            <p>{ weatherForecast }</p>
            <p>{ kelvinToCelcius } &deg;C</p>
        </>
}

export default WeatherCardBody
