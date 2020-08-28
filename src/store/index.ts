import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import {loadingSlice} from '../slice/loading';
import {photosSlice} from '../slice/photos';

const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  photos: photosSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, typeof rootReducer, null, Action<string>>