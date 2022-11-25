import { ERROR, LOAD, SUCCESS } from "../state/action-types"

const INITIAL_STATE = {
    loading:false,
    data:[],
    error:''
}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOAD:
            return {
                ...state, loading:true
            }
        case SUCCESS:
            return {
                ...state, loading:false,data:action.payload
            }
        case ERROR:
            return {
                ...state, loading:false,error:"action.payload"
            }
        default: return state;
    };
}

export default dataReducer;