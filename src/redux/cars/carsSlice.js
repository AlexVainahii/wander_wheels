import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";
import {
  createStatus,
  onFulfilledFetch,
  onFulfilled,
  onPending,
  onRejected,
  carsInitialState,
  STATUSES,
} from "./helpFunction";

export const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  extraReducers: (builder) => {
    const { PENDING, FULFILLED, REJECTED } = STATUSES;
    builder
      .addCase(fetchCars.fulfilled, onFulfilledFetch)
      .addMatcher(createStatus(PENDING), onPending)
      .addMatcher(createStatus(REJECTED), onRejected)
      .addMatcher(createStatus(FULFILLED), onFulfilled);
  },
});
