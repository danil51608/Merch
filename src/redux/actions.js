import {SWITCH_BLUE, SWITCH_GREEN, SWITCH_PURPLE, SWITCH_BLACK, SWITCH_RED, SWITCH_WHITE, SWITCH_SIDE} from './types'


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