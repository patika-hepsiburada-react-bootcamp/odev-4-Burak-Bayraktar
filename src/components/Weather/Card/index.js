import React from 'react'
import WeatherCardBody from './Body'
import WeatherCardFooter from './Footer'
import WeatherCardHeader from './Header'
import './style.scss'

const WeatherCard = ({data, loading, cityName}) => {
    const { weather } = data?.getCityById[0];
    
    return (
        <div className="weather-wrapper">
            <WeatherCardHeader name={cityName} />
            <WeatherCardBody data={weather} loading={loading} />
            <WeatherCardFooter />        
        </div>
    )
}

export default WeatherCard
