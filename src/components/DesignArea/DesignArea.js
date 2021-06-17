import React, {useEffect} from 'react'
import './DesignArea.css'
import tShirtFront from '../../imgs/t-shirtFront.png'
import tShirtBack from '../../imgs/t-shirtBack.png'
import whiteShirtFront from '../../imgs/t-shirtWFront.png'
import whiteShirtBack from '../../imgs/t-shirtWBack.png'
import {connect} from 'react-redux'
import {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed, switchToWhite, switchSide, addText, addImage} from '../../redux/actions'

function DesignArea(props){

    // redux states and actions
    const {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed,
           switchToWhite, switchSide, color, side, text, font, textColor, addText, showTextSettings,
           showImageSettings, image, addImage
           } = props

    // делает элементы перетаскиваемыми
    useEffect(() => setDraggableElements(), [showTextSettings, showImageSettings])

    // создает div с текстом пользователя
    function createText() {
        addText() // закрывает настройки текста
        const params = {font, textColor} // get text parameters
        createTextElement(params)
    }

    function createImage() {
        addImage() // close text settings 
        createImageElement(image)
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
                
                {/* if showTextSettings is shown => show draggable and customizable text element  */}
                {
                    showTextSettings ? 
                    
                    <div id='dragWrapper' className='draggable'> 
                        <div id='dragWrapperheader' className='dragHeader'></div>
                        <button id='createText' onClick={()=>createText()}>&#10003;</button>
                        <textarea id='textSign' value={text} style={{fontSize: font+'px', color: textColor}} onChange={()=> null}></textarea>
                    </div> 

                    : null
                }
                {
                    showImageSettings ?

                    <div id='dragWrapperImg' className='draggable'> 
                        <div id='dragWrapperImgheader' className='dragHeader'></div>
                        <button id='createText' onClick={()=>createImage()}>&#10003;</button>
                        <img id='userImage' src={image} alt=''/>
                    </div> 

                    : null
                    
                }

            </div>

            <ul className='colorList'>
                <li id='blueColor' onClick={switchToBlue}></li>
                <li id='purpleColor' onClick={switchToPurple}></li>
                <li id='greenColor' onClick={switchToGreen}></li>
                <li id='blackColor' onClick={switchToBlack}></li>
                <li id='redColor' onClick={switchToRed}></li>
                <li id='whiteColor' onClick={switchToWhite}></li>
            </ul>
        </div>
    )
}


//get state's objects
const mapStateToProps = (state) => {
    return {
        color: state.constructorReducer.color,
        side: state.constructorReducer.side,
        text: state.settingsReducer.text,
        font: state.settingsReducer.font,
        showTextSettings: state.settingsReducer.showTextSettings,
        textColor: state.settingsReducer.textColor,
        showImageSettings: state.settingsReducer.showImageSettings,
        image: state.settingsReducer.image,
    }
}


//get all actions
const mapDispatchToProps = {
    switchToBlue,
    switchToPurple,
    switchToGreen, 
    switchToBlack,
    switchToRed,
    switchToWhite,
    switchSide,
    addText,
    addImage
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignArea)

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

function createTextElement(params){
    //wrapper is used to define the needed position
    const wrapper = document.getElementById('dragWrapper')
    const styles = window.getComputedStyle(wrapper)
    const top = styles.getPropertyValue('top')
    const left = styles.getPropertyValue('left')

    const input = document.getElementById('textSign') //get input 

    //creates a div with user text and apply needed parameters
    const newElement = document.createElement('div')
    newElement.innerText = input.value
    newElement.style.color = params.textColor
    newElement.className = 'insertedElement'
    newElement.style.top = top
    newElement.style.left = left
    newElement.style.fontSize = params.font + 'px'

    //get parentElement for inserting and insert
    const parentElement = document.getElementsByClassName('t-shirtWrapper')[0]
    parentElement.appendChild(newElement)
}

function createImageElement(image){
    //wrapper is used to define the needed position
    const wrapper = document.getElementById('dragWrapperImg')
    const styles = window.getComputedStyle(wrapper)
    const top = styles.getPropertyValue('top')
    const left = styles.getPropertyValue('left')
    const width = styles.getPropertyValue('width')
    const height = styles.getPropertyValue('height')

    //creates a div with user text and apply needed parameters
    const imageEl = document.createElement('img')
    const imageWrapper = document.createElement('div')
    imageWrapper.classList = 'image-wrapper'
    imageWrapper.style.width = width
    imageWrapper.style.height = height
    imageEl.src = image
    imageEl.className ='insertedImage'
    imageWrapper.style.top = top
    imageWrapper.style.left = left
    imageWrapper.appendChild(imageEl)
    //get parentElement for inserting and insert
    const parentElement = document.getElementsByClassName('t-shirtWrapper')[0]
    parentElement.appendChild(imageWrapper)
}