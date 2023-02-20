import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface SettingsState {
  value: boolean
}

// Define the initial state using that type
const initialState: SettingsState = {
  value: false
};

export const settingsSlice = createSlice({
  name: 'settings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSettings: (state) => {
        state.value = !state.value;
        }
    },
});

export const { toggleSettings } = settingsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const settings = (state: RootState) => state.settings.value;

export default settingsSlice.reducer;