import axios from 'axios'
import {LOAD, SUCCESS, ERROR} from '../state/action-types'

export const getData = ()=>{
    return async (dispatch)=>{
        try {
            dispatch({type:LOAD})
    
            let data = await axios.get('https://omdbapi.com/?s=%27car%27&page=1&apikey=fc1fef96')
            let response = data.data.Search;
            
            dispatch({type:SUCCESS,payload:response})
        } catch (error) {
            dispatch({type:ERROR})
        }
    }
}

export const filter = (keyword)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:LOAD})
    
            let data = await axios.get(`https://omdbapi.com/?s=${keyword}=&page=1&apikey=fc1fef96`)
            let response = data.data.Search;
            dispatch({type:SUCCESS,payload:response})
        } catch (error) {
            dispatch({type:ERROR})
        }
    }
}