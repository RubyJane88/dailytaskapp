import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { forceReducerReload } from "redux-injectors";
import { createReducer } from "./reducers";

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== "production" ||
      process.env.PUBLIC_URL.length > 0,
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept("./reducers", () => {
      forceReducerReload(store);
    });
  }

  return store;
}
