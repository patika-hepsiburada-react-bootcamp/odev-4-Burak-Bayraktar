import React from 'react'
import { useWeather } from '../../../../contexts/WeatherContext'
import '../style.scss'

const WeatherCardHeader = () => {
    const {city:  { name }} = useWeather();
    return <div className="weather-header">{ name }</div>
}

export default WeatherCardHeader
