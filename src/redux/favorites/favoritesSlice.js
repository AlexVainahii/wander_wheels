import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favoriteCars: [] },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteCars.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favoriteCars = state.favoriteCars.filter(
        (item) => item !== payload
      );
    },
  },
});
export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
