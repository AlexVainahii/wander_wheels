import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carsSlice } from "./cars/carsSlice";
import { filterSlice } from "./filter/filterSlice";
import { favoritesSlice } from "./favorites/favoritesSlice";
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoriteCars"],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoritesSlice.reducer),
    cars: carsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);
