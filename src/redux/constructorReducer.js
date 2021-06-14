import {SWITCH_BLUE, SWITCH_GREEN, SWITCH_PURPLE, SWITCH_BLACK, SWITCH_RED, SWITCH_WHITE, SWITCH_SIDE} from './types'

const initialState = {
    color: 'red',
    side: true 
}


export const constructorReducer = (state = initialState, action) => {
   switch (action.type) {
       case SWITCH_BLUE:
           return {...state, color: 'blue'}
       case SWITCH_PURPLE:
           return {...state, color: 'purple'}
       case SWITCH_GREEN:
           return {...state, color: 'green'}
       case SWITCH_BLACK:
           return {...state, color: 'black'}
       case SWITCH_RED:
           return {...state, color: 'red'}
       case SWITCH_WHITE:
           return {...state, color: 'white'}
       case SWITCH_SIDE:
           return {...state, side: !state.side}
        default:
            return state
   }
}
