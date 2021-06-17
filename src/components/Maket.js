import React from 'react'
import tShirt from '../imgs/t-shirtFront.png'
import {
    Link
  } from "react-router-dom";

export default function Maket(){
    return (
        <div className="maketWrapper">
            <div className="imgContainer">
                <img src={tShirt} alt="" />
            </div>
            <Link exact to="/create">
                    <button className="settingsButton" style={{marginTop:0}}>Create</button>
            </Link>
            
        </div>
    )
}