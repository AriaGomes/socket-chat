import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface ThemeState {
  value: string
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: localStorage.getItem('theme') || 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // toggle theme
    toggleTheme: (state) => {
        if (state.value === 'light') {
            state.value = 'dark';
        } else {
            state.value = 'light';
        }
        }
    },
});

export const { toggleTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const theme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;