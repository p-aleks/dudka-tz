import {createStore} from "redux";
import {reducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {applySessionStorage} from "./sessionStorageService";

export const store = createStore(reducer, composeWithDevTools(applySessionStorage()));