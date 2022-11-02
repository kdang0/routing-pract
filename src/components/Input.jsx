import React from 'react'

import { useParams } from 'react-router';
const Input = () => {
    const { input, colorOne, colorTwo } = useParams();
    return (
        <div style={{backgroundColor: colorTwo, opacity:0.5}}>
            {
                isNaN(input) ? 
                <p style={{color:colorOne}}>The word is: {input}</p> : 
                <p style={{color:colorOne}}>The number is: {input}</p>
            }

        </div>
    )
}

export default Input