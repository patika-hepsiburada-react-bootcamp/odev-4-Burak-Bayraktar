import React from 'react'
import '../style.scss'

const WeatherCardBody = ({ data, loading }) => {

    const date = new Date(data?.timestamp * 1000)
    const currentDate = date.toLocaleString('en-US', { month: "long", year: "numeric", day: "numeric", weekday: 'long'});
    const weatherForecast = `${data?.summary.title} ${data?.summary.description}`;
    const kelvinToCelcius = (data?.temperature.actual - 273.15).toFixed(1);

    return <div className="weather-body">
        {
            loading 
            ?   <p>Loading...</p>
            : <>
                <p>{ currentDate }</p>
                <p>{ weatherForecast }</p>
                <p>{ kelvinToCelcius }</p>
              </>
            
        }
    </div>
}

export default WeatherCardBody
