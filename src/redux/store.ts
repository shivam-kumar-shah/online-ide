import { configureStore } from "@reduxjs/toolkit";
import { codeReducer } from "./reducers/codeReducer";
import { loggerMiddleware } from "./middleware/loggerMiddleware";

export const store = configureStore({
  reducer: {
    codeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    loggerMiddleware,
    ...getDefaultMiddleware(),
  ],
});

export type RootState = ReturnType<typeof store.getState>;
