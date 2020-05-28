import {CHANGE_FIELD} from './types'
const initState={
    searchfield:''
}
export const actionReducer=(state=initState,action)=>{
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                searchfield:action.payload
            }
    
        default: return state;
           
    }
}