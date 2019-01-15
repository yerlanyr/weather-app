import {createStore} from 'redux';

const setCurrentCityActionName = 'SET_CURRENT_CITY';
export const setCurrentCityAction = (currentCity) => ({type: setCurrentCityActionName, currentCity});
const setCitiesActionName = 'SET_CITIES';
export const setCitiesAction = (cities) => ({type: setCitiesActionName, cities});
const reducer = (state = {}, action) => {
    switch(action.type){
        case setCurrentCityActionName:
        return {...state, currentCity: action.currentCity};
        case setCitiesActionName:
        return {...state, cities: action.cities};
        default: return state;
    }
};


const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;  