import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      if (state.value < 10) {
        state.value += 1;
      }
    },
    decrement: state => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    change: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const {increment, decrement, change} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
