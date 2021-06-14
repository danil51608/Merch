import React, {useEffect} from 'react'
import './DesignArea.css'
import tShirtFront from '../../imgs/t-shirtFront.png'
import tShirtBack from '../../imgs/t-shirtBack.png'
import whiteShirtFront from '../../imgs/t-shirtWFront.png'
import whiteShirtBack from '../../imgs/t-shirtWBack.png'
import {connect} from 'react-redux'
import {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed, switchToWhite, switchSide} from '../../redux/actions'

function DesignArea(props){

    const {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed, switchToWhite, color, switchSide, side} = props
    // Make the DIV element draggable:
    useEffect( () => dragElement(document.getElementById("draggable")), [])
    

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
                <div id='draggable'></div>
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

const mapStateToProps = (state) => {
    return {
        color: state.constructorReducer.color,
        side: state.constructorReducer.side
    }
}

const mapDispatchToProps = {
    switchToBlue,
    switchToPurple,
    switchToGreen, 
    switchToBlack,
    switchToRed,
    switchToWhite,
    switchSide
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignArea)

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