import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    login_details:loginReducer
})

export default rootReducer;