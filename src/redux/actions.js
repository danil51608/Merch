import {SWITCH_BLUE, SWITCH_GREEN, SWITCH_PURPLE, SWITCH_BLACK, SWITCH_RED, SWITCH_WHITE, SWITCH_SIDE, CHANGE_TEXT, CHANGE_FONT,
ADD_TEXT, CHANGE_COLOR, ADD_IMG, CHANGE_IMG} from './types'


export const switchToBlue = () => {
    return {
        type: SWITCH_BLUE
    }
}

export const switchToPurple = () => {
    return {
        type: SWITCH_PURPLE
    }
}

export const switchToGreen = () => {
    return {
        type: SWITCH_GREEN
    }
}

export const switchToRed = () => {
    return {
        type: SWITCH_RED
    }
}

export const switchToBlack = () => {
    return {
        type: SWITCH_BLACK
    }
}

export const switchToWhite = () => {
    return {
        type: SWITCH_WHITE
    }
}

export const switchSide = () => {
    return {
        type: SWITCH_SIDE
    }
}

export const changeText = (text) =>{
    return {
        type: CHANGE_TEXT,
        payload: text
    }
}

export const changeFont = (size) =>{
    return {
        type: CHANGE_FONT,
        payload: size
    }
}

export const changeColor = (color) =>{
    return {
        type: CHANGE_COLOR,
        payload: color
    }
}

export const addText = () =>{
    return {
        type: ADD_TEXT
    }
}

export const addImage = () =>{
    return {
        type: ADD_IMG
    }
}

export const changeImg = (img) =>{
    return {
        type: CHANGE_IMG,
        payload: img
    }
}