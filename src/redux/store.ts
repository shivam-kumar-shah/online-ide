import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { codeReducer } from "./reducers/codeReducer";
import { authReducer } from "./reducers/authReducer";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const rootReducer = combineReducers({
  authReducer,
  codeReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const codeSelector = (state: RootState) => state.codeReducer;
export const authSelector = (state: RootState) => state.authReducer;

export default store;
