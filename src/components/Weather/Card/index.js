import React from 'react'
import WeatherCardBody from './Body'
import WeatherCardFooter from './Footer'
import WeatherCardHeader from './Header'
import './style.scss'
import logo from '../../../assets/img/loading.png'
const WeatherCard = ({data, loading, cityName}) => {
    
    return (
        <div className="weather-wrapper">
            <WeatherCardHeader name={cityName} />
            <div className="weather-body">
            {
                !loading 
                ? <WeatherCardBody data={data?.getCityById[0]} loading={loading} />
                : <div className="loading-wrapper"><img className="loading-icon" alt="loading" src={logo} /></div>
            }
            </div>
            <WeatherCardFooter />        
        </div>
    )
}

export default WeatherCard
