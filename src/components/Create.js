import React from 'react'
import Settings from './Settings/Settings'
import DesignArea from './DesignArea/DesignArea'

export default function Create(){
    return (
        <div className='createWrapper'>
            <Settings />
            <DesignArea />
        </div>
    )
}