import React from 'react'
import Maket from './Maket'
import {
    Link
  } from "react-router-dom";

export default function StartPage() {
    return (
            <div className="wrapper">
                <div className="banner">
                    <li><Link to="/create">Create</Link></li>
                </div>
                <Maket />
            </div>
    )
}