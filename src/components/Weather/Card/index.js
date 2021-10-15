import React from 'react'
import WeatherCardBody from './Body'
import WeatherCardFooter from './Footer'
import WeatherCardHeader from './Header'
import './style.scss'

const WeatherCard = () => {
    return (
        <div className="weather-wrapper">
            <WeatherCardHeader />
            <WeatherCardBody />
            <WeatherCardFooter />
        </div>
    )
}

export default WeatherCard
