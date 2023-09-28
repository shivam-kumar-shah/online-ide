import { configureStore } from "@reduxjs/toolkit";
import { codeReducer } from "./reducers/codeReducer";

export const store = configureStore({
  reducer: {
    codeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
