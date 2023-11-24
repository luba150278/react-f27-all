import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

export const counterSlice = createSlice(
  {
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        return state + 1;
      },
      decrement: (state) => {
        return state - 1;
      },
      changeValue: (state, action) => {
        const { act, val } = action.payload;

        return act === '-' ? state - Number(val) : state + Number(val);
      }
    }
  }
);

export const { increment, decrement, changeValue } = counterSlice.actions;
export default counterSlice.reducer;