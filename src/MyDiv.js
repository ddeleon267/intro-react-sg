import React from 'react'
import FavoriteLanguage from './FavoriteLanguage'

function MyDiv(props) {
    const { name, quirk, handleOnClick } = props
    return (
        <div>
            <li>{name} - {quirk}</li>
            <FavoriteLanguage language={"Ruby"}/>
            <button onClick={handleOnClick}>Click me!</button>
        </div>
    )
}

export default MyDiv