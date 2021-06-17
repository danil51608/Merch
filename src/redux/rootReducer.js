import {combineReducers} from 'redux'
import {constructorReducer} from './constructorReducer'
import {settingsReducer} from './settingsReducer'


export const rootReducer = combineReducers({
    constructorReducer,
    settingsReducer
}) 