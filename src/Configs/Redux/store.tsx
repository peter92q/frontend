import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { accountSlice } from "./accountSlice";
import { basketSlice } from "./basketSlice";
import { catalogueSlice } from "./catalogueSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { sortParamsSlice } from "./sortParamsSlice";

const rootReducer = combineReducers({
  catalog: catalogueSlice.reducer, 
  basket: basketSlice.reducer,
  account: accountSlice.reducer,
  params: sortParamsSlice.reducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['params']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;