import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);


// hot-load the reducers

// if(module.hot){
//     module.hot.accept('./reducers/', () => {
//         const nextRootReducers = require('./reducers/index').default;
//         store.replaceReducer(nextRootReducers)
//     })
// }

export default store;