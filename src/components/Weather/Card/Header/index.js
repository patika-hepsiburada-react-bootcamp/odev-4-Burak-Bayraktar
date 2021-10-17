import React from 'react'
import '../style.scss'

const WeatherCardHeader = ({ name }) => {
    return (
        <div className="weather-header">
            { name }
        </div>
    )
}

export default React.memo(WeatherCardHeader)
