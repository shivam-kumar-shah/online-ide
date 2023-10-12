import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { codeReducer } from "./reducers/Code/codeReducer";
import { authReducer } from "./reducers/Auth/authReducer";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import apiSlice from "./api";
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  authReducer,
  codeReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const codeSelector = (state: RootState) => state.codeReducer;
export const authSelector = (state: RootState) => state.authReducer;

export default store;
