import plantsData from '../data/plants-base';
// import constants

const initialState = {
    plants: plantsData
};

function rootReducer(state=initialState, action){
    return state;
}

export default rootReducer;