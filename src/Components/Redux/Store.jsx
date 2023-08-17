import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";


import Slice from '../Redux/Slice/Slice'
const persistConfig = {
  key: "root",
  storage,
 

};
const reducer = combineReducers({
  Product:Slice,
})
const persistedReducer = persistReducer(persistConfig, reducer);


export default configureStore({
  reducer: persistedReducer,
});