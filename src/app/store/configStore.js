import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import combinedReducers from './combineReducers';

const configStore = () => {
    return createStore(combinedReducers, devToolsEnhancer());
}

export default configStore;