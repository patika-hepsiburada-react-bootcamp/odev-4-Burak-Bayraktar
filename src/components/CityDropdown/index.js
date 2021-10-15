import React from 'react'
import Select from 'react-select'
import './style.scss'

const CityDropdown = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]
    return (
        <div className="dropdown-wrapper">
            <Select options={options} />
        </div>
    )
}

export default CityDropdown
