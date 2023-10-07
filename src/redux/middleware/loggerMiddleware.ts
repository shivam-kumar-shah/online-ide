import { Middleware } from "redux";

import { RootState } from "../store";

//TODO:Remove any type from loggermiddlware store

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    // log actions
    console.log("[LOG]: " + action.type + " " + new Date().toString());
    // call next middleware in pipeline.
    next(action);
    // log the modified state of app.
    console.log(store.getState());
  };
