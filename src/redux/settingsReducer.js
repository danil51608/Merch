import {CHANGE_TEXT, CHANGE_FONT, ADD_TEXT, CHANGE_COLOR, ADD_IMG, CHANGE_IMG} from './types'


const initialState = {
    text: 'Text',
    font: '14px',
    showTextSettings: false,
    showImageSettings: false,
    textColor: '#000000',
    image: ''
}


export const settingsReducer = (state = initialState, action) => {
   switch (action.type) {
       case CHANGE_TEXT:
           return {...state, text: action.payload}
       case CHANGE_FONT:
           return {...state, font: action.payload}
       case CHANGE_COLOR:
           return {...state, textColor: action.payload}
       case ADD_TEXT:
           return {...state, showTextSettings: !state.showTextSettings} 
       case ADD_IMG:
           return {...state, showImageSettings: !state.showImageSettings}   
       case CHANGE_IMG:
           return {...state, image: action.payload} 
        default:
            return state
   }
}