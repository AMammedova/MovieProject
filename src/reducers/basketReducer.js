import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../state/action-types";

const INITIAL_STATE = {
    data:[],
}

const basketReducer = (state=INITIAL_STATE, action) => {
    let dataNew = INITIAL_STATE.data;
    switch(action.type){
        case ADD_TO_BASKET:
        INITIAL_STATE.data.some(x=>x.imdbid==action.payload.imdbid)?dataNew = INITIAL_STATE.data:dataNew.push(action.payload);
        return {
            ...state, data: dataNew
        }
        case REMOVE_FROM_BASKET:
            let el; dataNew.forEach(x=>{if(x.imdbid==action.payload)el=x})
            dataNew.splice(dataNew.indexOf(el), 1);
            return {
                ...state, data: dataNew
            }
        default: return state;
    };
}

export default basketReducer;