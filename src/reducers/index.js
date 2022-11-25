import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    data:dataReducer,
    basket:basketReducer,
})

export default rootReducer;