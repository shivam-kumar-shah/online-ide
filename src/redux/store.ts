import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { codeReducer } from "./reducers/codeReducer";
import { authReducer } from "./reducers/authReducer";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const rootReducer = combineReducers({
  authReducer,
  codeReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;
export default store;
