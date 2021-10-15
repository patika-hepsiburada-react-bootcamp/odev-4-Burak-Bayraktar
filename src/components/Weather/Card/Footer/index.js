import React from 'react'
import '../style.scss'

const WeatherCardFooter = () => {
    return (
        <div className="weather-footer">
            Powered by <a className="weather-footer-link" href="https://graphql-weather-api.herokuapp.com/">WeatherAPI</a>
        </div>
    )
}

export default WeatherCardFooter
