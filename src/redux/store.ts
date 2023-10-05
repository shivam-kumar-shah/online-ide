import { configureStore } from "@reduxjs/toolkit";
import { codeReducer } from "./reducers/codeReducer";
import { authReducer } from "./reducers/authReducer";
import { loggerMiddleware } from "./middleware/loggerMiddleware";

export const store = configureStore({
  reducer: {
    codeReducer,
    authReducer,
  },
  // middleware: (getDefaultMiddleware) => [
  //   loggerMiddleware,
  //   ...getDefaultMiddleware(),
  // ],
});

export type RootState = ReturnType<typeof store.getState>;
