import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setLoading} from './loading';
import {RootState, store} from '../store';

interface PhotoType {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  },
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  }
}

interface PhotoStateType {
  data: PhotoType[];
  error: boolean;
  errorMessage?: string;
}

export const fetchPhotos = createAsyncThunk(
  'photos/getPhotos',
  async (args, thunkApi) => {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${process.env['REACT_APP_API_KEY']}`)
    if (!response.ok) throw Error(response.statusText);
    return (await response.json()).photos as PhotoType[];
  }
);

const initialState: PhotoStateType = {
  data: [],
  error: false,
  errorMessage: ''
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPhotos.fulfilled, (state: PhotoStateType, action: PayloadAction<PhotoType[]>) => {
      state.data = action.payload;
    })
    builder.addCase(fetchPhotos.rejected, (state: PhotoStateType, action) => {
      state.error = true;
      state.errorMessage = action.error.message;
    })
  }
});

export const selectPhotos = (state: RootState): PhotoStateType => state.photos;