import { combineReducers} from 'redux';
import Productive from "./foodscart";
import {SeacrhText} from "./search"


export const reducer =  combineReducers({
    Productive,
    SeacrhText
})