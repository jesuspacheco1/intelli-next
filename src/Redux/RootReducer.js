import {combineReducers} from 'redux';
import AuthReducer from './Components/Auth/AuthReducer';
import DeviceReducer from './Components/Devices/DeviceReducer';
import SuperHeroReducer from './Components/SuperHeroes/SuperHeroReducer';

export default combineReducers({
    AuthReducer,
    DeviceReducer,
    SuperHeroReducer
});