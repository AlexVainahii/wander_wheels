export const selectCars = (state) => {
  return state.cars.cars;
};

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;

export const selectFilter = (state) => state.filter;

export const selectFavorites = (state) => state.favorites.favoriteCars;
