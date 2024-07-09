import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

// Define a type for the slice state
interface LocationState {
  /** Latitude of the anchor location */
  latitude?: number;
  /** Longitude of the anchor location */
  longitude?: number;
}

const initialState: LocationState = {
  latitude: undefined,
  longitude: undefined,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<GeolocationCoordinates>) => {
      state.longitude = action.payload.longitude;
      state.latitude = action.payload.latitude;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
