import React from 'react'
import './styles.scss'

const Error = ({ error }) => {

    return (
        <div className="error">
            <p>SORRY !</p>
            <p>
                {error.message}            
            </p>
            <p>
                Please contact us, so that we can take a look and see what was going on...
            </p>
        </div>
    )
}

export default Error
