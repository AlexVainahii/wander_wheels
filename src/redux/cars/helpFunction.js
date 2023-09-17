import { isAnyOf } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const arrThunks = [fetchCars];
export const onPending = (state) => {
  state.isLoading = true;
};

export const carsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
};

export const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const onFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = "";
};

export const onFulfilledFetch = (state, { payload }) => {
  state.cars = payload;
};

export const createStatus = (type) =>
  isAnyOf(...arrThunks.map((el) => el[type]));

export const STATUSES = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};
