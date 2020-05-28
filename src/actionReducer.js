import {CHANGE_FIELD,REQUEST_PENDING,REQUEST_SUCCESS,REQUEST_FAILD} from './types'
const initStatesearch={
    searchfield:''
}
export const actionReducer=(state=initStatesearch,action)=>{
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                searchfield:action.payload
            }
         
    
        default: return state;
           
    }
}
const initStateRobot={
    robots:[],
    error:'',
    isPending:false
}
export const requestRobots=(state=initStateRobot,action)=>{
  
    switch (action.type) {
       
            case REQUEST_PENDING:
                return {...state ,isPending:true};
             case  REQUEST_SUCCESS:
                 return{
                     ...state,
                     robots:action.payload,
                     isPending:false

                 }
                 case REQUEST_FAILD:
                     return{
                         ...state,
                         errors:action.payload,
                         isPending:false
                     }
    
        default: return state;
           
    }
}