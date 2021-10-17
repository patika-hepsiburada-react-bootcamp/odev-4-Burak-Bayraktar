import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import CityDropdown from '../../components/CityDropdown'
import WeatherCard from '../../components/Weather/Card'
import './style.scss'
import { cities } from '../../cityData.json'
import { FETCH_WEATHER } from '../../apolloClient/queries/Weather'

const WeatherApp = () => {

    const [city, setCity] = useState({ id: cities[0].id, name: cities[0].name});
    const { loading, data, error } = useQuery(FETCH_WEATHER, {  variables: { id: city.id } });
    
    useEffect(() => {
        console.log(city);
        setCity(city)
    }, [city])

    return (
        <div className="app-wrapper">
            <CityDropdown city={city} setCity={setCity} />
            <WeatherCard error={error} data={data} cityName={city.name} loading={loading} />
        </div>
    )
}

export default WeatherApp
