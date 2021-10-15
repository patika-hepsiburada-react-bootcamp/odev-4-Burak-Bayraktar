import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import CityDropdown from '../../components/CityDropdown'
import WeatherCard from '../../components/Weather/Card'
import './style.scss'
import { FETCH_WEATHER } from '../../apolloClient/queries.js'

const WeatherApp = () => {

    const [city, setCity] = useState({ id: "745042", name: "İstanbul"});
    const { loading, data, error } = useQuery(FETCH_WEATHER, {  variables: { id: city.id } });
    
    useEffect(() => {
        console.log(city);
        debugger;
        setCity(city)
    }, [city])

    return (
        <div className="app-wrapper">
            <CityDropdown setCity={setCity} />
            {
                loading ? <div className="loading">Loading</div>:
                <WeatherCard data={data} cityName={city.name} loading={loading} />
            }
        </div>
    )
}

export default WeatherApp
