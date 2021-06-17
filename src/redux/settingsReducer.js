import {CHANGE_TEXT, CHANGE_FONT_SIZE, SHOW_TEXT_SETTINGS, CHANGE_TEXT_COLOR, SHOW_IMAGE_SETTINGS, CHANGE_IMG} from './types'


const initialState = {
    text: 'Text',
    fontSize: '42',
    showTextSettings: false,
    showImageSettings: false,
    textColor: '#000000',
    image: ''
}


export const settingsReducer = (state = initialState, action) => {
   switch (action.type) {
       case CHANGE_TEXT:
           return {...state, text: action.payload}
       case CHANGE_FONT_SIZE:
           return {...state, fontSize: action.payload}
       case CHANGE_TEXT_COLOR:
           return {...state, textColor: action.payload}
       case SHOW_TEXT_SETTINGS:
           return {...state, showTextSettings: !state.showTextSettings} 
       case SHOW_IMAGE_SETTINGS:
           return {...state, showImageSettings: !state.showImageSettings}   
       case CHANGE_IMG:
           return {...state, image: action.payload} 
        default:
            return state
   }
}