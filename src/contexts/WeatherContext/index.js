import { useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { FETCH_WEATHER } from "../../apolloClient/queries/Weather";
import { cities } from '../../cityData.json'

const Weather = createContext();
export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState({ id: cities[0].id, name: cities[0].name});
    const { loading, data, error } = useQuery(FETCH_WEATHER, {  variables: { id: city.id } });

    useEffect(() => {
        setCity(city)
    }, [city])
    
    const values = {
        loading, data, error, city, setCity
    }
    return <Weather.Provider value={values} >
        {children}
    </Weather.Provider>
}

export const useWeather = () => useContext(Weather);