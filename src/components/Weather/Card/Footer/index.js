import React from 'react'
import '../style.scss'

const WeatherCardFooter = () => {
    return (
        <div className="weather-footer">
            <div className="weather-footer-line">
                Powered by &nbsp;
                <a className="weather-footer-link" href="https://graphql-weather-api.herokuapp.com/">WeatherAPI</a>
            </div>
            <div className="weather-footer-line">
                Created by &nbsp;
                <a className="weather-footer-link" href="https://github.com/Burak-Bayraktar">Burak-Bayraktar</a>
            </div>
        </div>
    )
}

export default React.memo(WeatherCardFooter)
