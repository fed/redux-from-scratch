import {createStore} from '../lib/redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;
