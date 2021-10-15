import React from 'react'
import Select from 'react-select'
import './style.scss'
import {cities} from '../../cityData.json'

const CityDropdown = ({ setCity }) => {
    const options = cities?.map(city => ({ value: city.id, label: city.name}))

    return (
        <div className="dropdown-wrapper">
            <Select onChange={(event) => setCity({id: event.value, name: event.label})} options={options} />
        </div>
    )
}

export default CityDropdown
