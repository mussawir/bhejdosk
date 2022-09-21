import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from '../reducers/userReducer';
import storesReducer from '../reducers/storeReducer';
import getOrderReducer from '../reducers/getOrderReducer';
import areaReducer from '../reducers/areaReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [ 'isLogged', 'stores', 'selectManuallySingleCity', 'user', 'areaFromGeolocation','cityFromGeoLocation','locationFromGeoLocation','selectManuallyArea','selectManuallySubarea', ]
};


const rootReducer = combineReducers({
    storesReducer: persistReducer(persistConfig, storesReducer),
    userReducer: persistReducer(persistConfig, userReducer),
    getOrderReducer: persistReducer(persistConfig, getOrderReducer),
    areaReducer: persistReducer(persistConfig, areaReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);