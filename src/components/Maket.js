import React from 'react'
import tShirt from '../imgs/t-shirtFront.png'

export default function Maket(){
    return (
        <div className="maketWrapper">
            <div className="imgContainer">
                <img src={tShirt} alt="" />
            </div>
            <button className="PinkButton">Create Shirt</button>
        </div>
    )
}