import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPhotos} from './photos';
import {RootState} from '../store';

interface LoadingType {
  status: boolean;
}

const initialState: LoadingType = {
  status: true
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.status = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.status = false;
    })
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.status = false;
    })
    builder.addCase(fetchPhotos.pending, (state, action) => {
      state.status = true;
    })
  }
});

export const {
  setLoading
} = loadingSlice.actions;

export const selectLoading = (state: RootState): boolean => state.loading.status;