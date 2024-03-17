import { configureStore } from "@reduxjs/toolkit";
import episodesReducer from "./episodesSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    episodes: episodesReducer,
    favorites: favoritesReducer,
  },
});
