import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveFavorites = createAsyncThunk(
  "favorites/saveFavorites",
  async (favorites) => {
    const favoritesJson = JSON.stringify(favorites);
    await AsyncStorage.setItem("favorites", favoritesJson);
  }
);
export const loadFavorites = createAsyncThunk(
  "favorites/loadFavorites",
  async () => {
    const jsonValue = await AsyncStorage.getItem("favorites");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }
);
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    favoritesStatus: "idle",
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loadFavorites.fulfilled, (state) => {
  //       state.episodesStatus = "loading";
  //     })
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
