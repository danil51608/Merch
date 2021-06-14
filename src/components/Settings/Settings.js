import React, {useState} from 'react'
import './settings.css'

export default function Settings(){
    const [hideSettings, setHideSettings] = useState(true)
    return(
        <div className="settings">
            <h2>Design You Product</h2>
            {
             hideSettings ? <button className='settingsButton' onClick={()=>setHideSettings(false)}>Show Printable Area</button> 
             : <div>
                 <button className='settingsButton' onClick={()=>setHideSettings(true)}>Hide Printable Area</button> 
                 <button className='settingsButton'>Add Text</button> 
                 <button className='settingsButton'>Add Image</button> 
             </div> 
            }

        </div>
    )
}