import {combineReducers} from "redux";
import {LangReducer} from "./lang-reducer";
import {ThemeReducer} from './theme-reducer';

const rootReducer = combineReducers({
  langReducer: LangReducer.reducer,
  themeReducer:ThemeReducer.reducer
});

export default rootReducer;
