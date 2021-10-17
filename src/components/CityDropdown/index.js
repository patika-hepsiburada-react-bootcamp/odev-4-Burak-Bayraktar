import React from 'react'
import Select from 'react-select'
import './style.scss'
import {cities} from '../../cityData.json'
import { useWeather } from '../../contexts/WeatherContext'

const CityDropdown = () => {
    const { city: {id, name}, setCity } = useWeather();
    
    const options = cities?.map(c => ({ value: c.id, label: c.name}))
    const customStyles = {
        option: (provided) => ({
          ...provided,
          padding: 7,
          innerHeight:5
        }),
      }
    return (
        <div className="dropdown-wrapper">
            <Select 
                defaultValue={{value: id, label: name}}
                maxMenuHeight={140}
                onChange={({value, label}) => setCity({id: value, name: label})} 
                options={options}
                styles={customStyles}
            />
        </div>
    )
}

export default CityDropdown
