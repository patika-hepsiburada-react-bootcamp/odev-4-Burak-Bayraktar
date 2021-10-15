import React from 'react'
import CityDropdown from '../../components/CityDropdown'
import WeatherCard from '../../components/Weather/Card'
import './style.scss'

const WeatherApp = () => {
    return (
        <div className="app-wrapper">
            <CityDropdown />
            <WeatherCard />
        </div>
    )
}

export default WeatherApp
