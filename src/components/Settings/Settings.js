import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeText, changeFont, addText, changeColor, addImage, changeImg } from '../../redux/actions'
import './settings.css'

function Settings(props) {
    const [hideSettings, setHideSettings] = useState(true)
    const { changeText, changeFont, addText, showTextSettings, changeColor, showImageSettings, addImage, changeImg } = props

    function handleChange(e){
        const file = URL.createObjectURL(e.target.files[0])
        changeImg(file)
     }

     // открывает редактор текста/картинки и закрывает другой редактор
     function clickHandler(type){
         if(type === 'text'){
             addText()
            
         }
         else{
             addImage()
         }
     }

    return (
        <div className="settings" id="settings">
            <h2>Design You Product</h2>
            {
                hideSettings 
                ? 
                <button className='settingsButton' onClick={() => setHideSettings(false)}>Show Printable Area</button>
                : 
                <div>
                    <button className='settingsButton' onClick={() => setHideSettings(true)}>Hide Printable Area</button>
                    <button className='settingsButton' onClick={() => addText()}>Add Text</button>
                    {
                        showTextSettings 
                        ? 
                        <div>
                            <label>Your Text</label>
                            <textarea className='settingsValues' type='text' defaultValue='Text' id='textValue' onChange={(e) => changeText(e.target.value)} />
                            <label>Font Size</label>
                            <input className='settingsValues' type='text' defaultValue='14' id='fontSize' onChange={(e) => changeFont(e.target.value)} />
                            <label>Color</label><br/>
                            <input type='color' onChange={(e) => changeColor(e.target.value)} />
                        </div>
                        : 
                        null
                    }
                    
                    <button className='settingsButton' onClick={() => addImage()}>Add Image</button>
                    {
                        showImageSettings 
                        ?
                        <input type='file' id='imageInput' onChange={(e) => handleChange(e)} />
                        : 
                        null
                    }
                </div>
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showTextSettings: state.settingsReducer.showTextSettings,
        showImageSettings: state.settingsReducer.showImageSettings
    }
}

const mapDispatchToProps = {
    changeText,
    changeFont,
    addText,
    changeColor,
    addImage, 
    changeImg
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

