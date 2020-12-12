import { combineReducers } from 'redux';
import eventReducer from '../../features/events/eventReducer';
import testReducer from '../playground/testReducer';

const combinedReducers = combineReducers({
    test: testReducer,
    events_reducer: eventReducer

})

export default combinedReducers;