import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import './DesignArea.css'
import tShirtFront from '../../imgs/t-shirtFront.png'
import tShirtBack from '../../imgs/t-shirtBack.png'
import whiteShirtFront from '../../imgs/t-shirtWFront.png'
import whiteShirtBack from '../../imgs/t-shirtWBack.png'
import {connect} from 'react-redux'
import {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed, switchToWhite, switchSide, toggleTextSettings, toggleImageSettings} from '../../redux/actions'

function DesignArea(props){

    // redux states and actions
    const {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed,
           switchToWhite, switchSide, color, side, text, fontSize, textColor, toggleTextSettings, showTextSettings,
           showImageSettings, image, toggleImageSettings
           } = props

    
    function handleColorClick(e, switchColor){
        const colorElements = Array.from(document.getElementsByClassName('colorElement'))
        colorElements.map(colorElement=>{
            colorElement.style.border = '1px solid black';
        })
        e.target.style.border = '3px solid black'
        switchColor()
    }
    
    // делает элементы перетаскиваемыми
    useEffect(() => setDraggableElements(), [showTextSettings, showImageSettings])

    // создает div с текстом пользователя
    function createText() {
        toggleTextSettings() // закрывает настройки текста
        const params = {fontSize, textColor} // получение и передача настроек текста
        createUserElement(params) // создает статичный элемент 
    }

    function createImage() {
        toggleImageSettings() // закрывает настройки картинки
        createUserElement(image, 'img') // создает статичный элемент 
    }

    return (
        <div className="DesignAreaWrapper">
            <div className="sideButtonsWrapper">
                <button className="sideButton" onClick={switchSide}>Front/Back</button>
            </div>
            <div className="t-shirtWrapper">
                {
                    color === 'white' && side ? <img src={whiteShirtFront} alt=''/> : 
                    color === 'white' && !side ? <img src={whiteShirtBack} alt=''/> : 
                    side ? <img src={tShirtFront} alt='' className={color}/> :
                    !side ? <img src={tShirtBack} alt='' className={color}/> : null

                }
                
                {
                    showTextSettings ? 
                    
                    <div id='dragWrapper' className='draggable'> 
                        <button onClick={()=>createText()}>&#10003;</button>
                        <textarea id='dragWrapperheader' className='dragger' value={text} style={{fontSize: fontSize+'px', color: textColor}} onChange={()=> null}></textarea>
                    </div> 

                    : null
                }
                {
                    showImageSettings ?

                    <div id='dragWrapperImg' className='draggable'> 
                        <button onClick={()=>createImage()}>&#10003;</button>
                        <img id='dragWrapperImgheader' className='dragger' src={image} alt=''/>
                    </div> 

                    : null
                    
                }

            </div>

            <ul className='colorList'>
                <li id='blueColor' className='colorElement' onClick={(e)=>handleColorClick(e, switchToBlue) }></li>
                <li id='purpleColor' className='colorElement' onClick={(e)=>handleColorClick(e, switchToPurple)}></li>
                <li id='greenColor' className='colorElement' onClick={(e)=>handleColorClick(e, switchToGreen)}></li>
                <li id='blackColor' className='colorElement' onClick={(e)=>handleColorClick(e, switchToBlack)}></li>
                <li id='redColor' className='colorElement' onClick={(e)=>handleColorClick(e, switchToRed)}></li>
                <li id='whiteColor' className='colorElement' onClick={(e)=>handleColorClick(e, switchToWhite)}></li>
            </ul>

            <div className="instructions">
                <h2>Instructions:</h2>
                <span>1. Right Click To Delete Element</span><br/><br/>
                <span>2. Click On Color Circle To Change The T-Shirt Color</span><br/><br/>
                <span>3. Click Front/Back To Change The T-Shirt Side</span><br/><br/>
                <Link exact to="/">
                    <button className="settingsButton">Go To StartPage</button>
                </Link>
                
            </div>
           

        </div>
    )
}


// получение state'ов и передача их в компонент
const mapStateToProps = (state) => {
    return {
        color: state.constructorReducer.color,
        side: state.constructorReducer.side,
        text: state.settingsReducer.text,
        fontSize: state.settingsReducer.fontSize,
        showTextSettings: state.settingsReducer.showTextSettings,
        textColor: state.settingsReducer.textColor,
        showImageSettings: state.settingsReducer.showImageSettings,
        image: state.settingsReducer.image,
    }
}


// получение actions и передача их в компонент
const mapDispatchToProps = {
    switchToBlue,
    switchToPurple,
    switchToGreen, 
    switchToBlack,
    switchToRed,
    switchToWhite,
    switchSide,
    toggleTextSettings,
    toggleImageSettings
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignArea)



function createUserElement(params, type='text'){
    // получение wrapper и его стилей для определения позиции элемента 
    const wrapper =  document.getElementById(type === 'text' ? 'dragWrapper' : 'dragWrapperImg')
    const wrapperStyles = window.getComputedStyle(wrapper)
    const top = wrapperStyles.getPropertyValue('top')
    const left = wrapperStyles.getPropertyValue('left')
    const width = wrapperStyles.getPropertyValue('width')
    const height = wrapperStyles.getPropertyValue('height')

    // создание элемента
    const newElement = document.createElement('div')
    newElement.className = 'insertedElement'
    // размещение элемента
    newElement.style.top = top
    newElement.style.left = left
    newElement.oncontextmenu = (e) => { 
        e.preventDefault();
        e.target.remove()
    }
    // присвоение заданных размеров элементу
    newElement.style.width = width
    newElement.style.height = height

    // при создании элемента текста
    if(type === 'text'){
        // получение поля ввода текста
        const input = document.getElementById('dragWrapperheader')
        newElement.innerText = input.value
        // задание пользовательских настроек текста
        newElement.style.color = params.textColor
        newElement.style.fontSize = params.fontSize + 'px'
    }

    // при создании элемента картинки
    else{
        // создание картинки
        const imageEl = document.createElement('img')
        imageEl.src = params
        // вставка картинки в элемент
        newElement.appendChild(imageEl)
    }

    // получение контейнера футболки и вставка в него элемента
    const tShirt = document.getElementsByClassName('t-shirtWrapper')[0]
    tShirt.appendChild(newElement)
}

function setDraggableElements(){
    const ElList = document.querySelectorAll('.draggable')
    ElList.forEach(el => dragElement(el))
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
