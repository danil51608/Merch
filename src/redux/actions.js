import {SWITCH_BLUE, SWITCH_GREEN, SWITCH_PURPLE, SWITCH_BLACK, SWITCH_RED, SWITCH_WHITE, SWITCH_SIDE, CHANGE_TEXT, CHANGE_FONT_SIZE,
    SHOW_TEXT_SETTINGS, CHANGE_TEXT_COLOR, SHOW_IMAGE_SETTINGS, CHANGE_IMG} from './types'


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

export const changeFontSize = (size) =>{
    return {
        type: CHANGE_FONT_SIZE,
        payload: size
    }
}

export const changeTextColor = (color) =>{
    return {
        type: CHANGE_TEXT_COLOR,
        payload: color
    }
}

export const toggleTextSettings = () =>{
    return {
        type: SHOW_TEXT_SETTINGS
    }
}

export const toggleImageSettings = () =>{
    return {
        type: SHOW_IMAGE_SETTINGS
    }
}

export const changeImg = (img) =>{
    return {
        type: CHANGE_IMG,
        payload: img
    }
}