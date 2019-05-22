import React from 'react'
import './Header.css'

const Header = (props) => {
    return(
        <div className='header-container'>
            <h4 className='header-title'> {props.title} </h4>
        </div>
    )
}

export default Header