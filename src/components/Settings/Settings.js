import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeText, changeFontSize, toggleTextSettings, changeTextColor, toggleImageSettings, changeImg } from '../../redux/actions'
import './settings.css'

function Settings(props) {
    const [hideSettings, setHideSettings] = useState(true)
    const { changeText, changeFontSize, toggleTextSettings, showTextSettings, changeTextColor, showImageSettings, toggleImageSettings, changeImg, fontSize } = props

    function setImage(e){
        const file = URL.createObjectURL(e.target.files[0])
        changeImg(file)
     }

     // открывает редактор текста/картинки и закрывает другой редактор
    return (
        <div className="settings" id="settings">
            <h2>Design You Product</h2>
            {
                hideSettings 
                ? 
                <button className='settingsButton' onClick={() => setHideSettings(false)}>Add Element</button>
                : 
                <div>
                    <button className='settingsButton' onClick={() => setHideSettings(true)}>Hide Printable Area</button>
                    <button className='settingsButton' onClick={() => toggleTextSettings()}>Add Text</button>
                    {
                        showTextSettings 
                        ? 
                        <div>
                            <label>Your Text</label><br/>
                            <textarea className='settingsValues' type='text' defaultValue='Text' id='textValue' onChange={(e) => changeText(e.target.value)} /><br/>
                            <label>Font Size</label><br/>
                            <input className='settingsValues' type='text' defaultValue={fontSize} id='fontSize' onChange={(e) => changeFontSize(e.target.value)} /><br/>
                            <label>Text Color</label><br/>
                            <input type='color' onChange={(e) => changeTextColor(e.target.value)} />
                        </div>
                        : 
                        null
                    }
                    
                    <button className='settingsButton' onClick={() => toggleImageSettings()}>Add Image</button>
                    {
                        showImageSettings 
                        ?
                        <input type='file' id='imageInput' onChange={(e) => setImage(e)} />
                        : 
                        null
                    }
                </div>
            }

        </div>
    )
}


// получение state'ов и передача их в компонент
const mapStateToProps = (state) => {
    return {
        showTextSettings: state.settingsReducer.showTextSettings,
        showImageSettings: state.settingsReducer.showImageSettings,
        fontSize: state.settingsReducer.fontSize
    }
}

// получение actions и передача их в компонент
const mapDispatchToProps = {
    changeText,
    changeFontSize,
    toggleTextSettings,
    changeTextColor,
    toggleImageSettings, 
    changeImg
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

