import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Store, combineReducers } from "redux";
import logger from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AppState, appSlice, initialState as appState } from "./app/appSlice";
import { NavState, navSlice, initialState as navState } from "./nav/navSlice";

const persistConfig = {
  key: "webapp-root", // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  // whitelist: ["todos"], // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

const rootReducer = combineReducers({
  nav: navSlice.reducer,
  user: appSlice.reducer,
});

// Stateの初期値
const preloadedState = (): { nav: NavState; user: AppState } => ({
  nav: navState,
  user: appState,
});

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createStore = (): any => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ];

  return configureStore({
    reducer: persistedReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: preloadedState(),
  });
};

export const store = createStore();
export const persistor = persistStore(store);
