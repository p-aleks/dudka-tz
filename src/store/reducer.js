import {defaultState} from "./state";

const ADD_PACKAGE = 'ADD_PACKAGE';
const CHANGE_ADD_FORM_DATA = 'CHANGE_ADD_FORM_DATA';
const CLEAR_ADD_FORM_DATA = 'CLEAR_ADD_FORM_DATA';
const TOGGLE_IS_ADD_FORM_OPEN = 'TOGGLE_IS_ADD_FORM_OPEN';
const CHANGE_QUERY = 'CHANGE_QUERY';

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PACKAGE:
            return {...state, packages: [...state.packages, action.payload]};
        case CHANGE_ADD_FORM_DATA:
            return {...state, addFormData: action.payload};
        case CLEAR_ADD_FORM_DATA:
            return {...state, addFormData: defaultState.addFormData};
        case TOGGLE_IS_ADD_FORM_OPEN:
            return {...state, isAddFormOpen: !state.isAddFormOpen};
        case CHANGE_QUERY:
            return {...state, query: action.payload};
        default:
            return state;
    }
};

export const addPackageAction = (payload) => ({type: ADD_PACKAGE, payload});
export const changeAddFormDataAction = (payload) => ({type: CHANGE_ADD_FORM_DATA, payload});
export const clearAddFormDataAction = () => ({type: CLEAR_ADD_FORM_DATA});
export const toggleIsAddFormOpenAction = () => ({type: TOGGLE_IS_ADD_FORM_OPEN});
export const changeQueryAction = (payload) => ({type: CHANGE_QUERY, payload});