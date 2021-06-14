import React from 'react'
import './DesignArea.css'
import tShirtFront from '../../imgs/t-shirtFront.png'
import tShirtBack from '../../imgs/t-shirtBack.png'
import whiteShirtFront from '../../imgs/t-shirtWFront.png'
import whiteShirtBack from '../../imgs/t-shirtWBack.png'
import {connect} from 'react-redux'
import {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed, switchToWhite, switchSide} from '../../redux/actions'

function DesignArea(props){

    const {switchToBlue, switchToPurple, switchToGreen, switchToBlack, switchToRed, switchToWhite, color, switchSide, side} = props

    const handleClick = (e) =>{
        e.target.classList.toggle('active')
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