import { createSlice } from '@reduxjs/toolkit';
import { initialFilters } from 'components/FilterForm/filter';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilters,
  reducers: {
    changeFilter: (state, { payload }) => {
      return (state = { ...payload });
    },
  },
});
export const { changeFilter } = filterSlice.actions;
