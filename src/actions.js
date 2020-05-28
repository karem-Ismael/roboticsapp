import {CHANGE_FIELD,REQUEST_PENDING,REQUEST_SUCCESS,REQUEST_FAILD} from './types'

export const filedChange=(text)=>({
    type:CHANGE_FIELD,
    payload:text
})
export const requestRobots=()=>(dispatch)=>{
    dispatch({type:REQUEST_PENDING,})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=> dispatch({type:REQUEST_SUCCESS,payload:data}))
    .catch(error=>dispatch({type:REQUEST_FAILD,payload:error}))
}