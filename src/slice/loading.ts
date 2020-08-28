import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: boolean = true;

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state = action.payload;
    }
  }
});

export const {
  setLoading
} = loadingSlice.actions;