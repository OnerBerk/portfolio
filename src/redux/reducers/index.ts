import {combineReducers} from "redux";
import {LangReducer} from "./LangReducer";

const rootReducer = combineReducers({
  lang: LangReducer.reducer,
});

export default rootReducer;
