import React from 'react'
import Select from 'react-select'
import './style.scss'
import {cities} from '../../cityData.json'

const CityDropdown = ({ city, setCity }) => {
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
                defaultValue={{value: city.id, label: city.name}}
                maxMenuHeight={140}
                onChange={(event) => setCity({id: event.value, name: event.label})} 
                options={options}
                styles={customStyles}
            />
        </div>
    )
}

export default CityDropdown
