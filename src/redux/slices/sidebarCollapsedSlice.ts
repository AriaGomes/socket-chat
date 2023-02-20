import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface SidebarCollapsedState {
  value: boolean
}

// Define the initial state using that type
const initialState: SidebarCollapsedState = {
  value: false
};

export const sidebarCollapsedSlice = createSlice({
  name: 'sidebarCollapsed',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // toggle theme
    toggleSidebar: (state) => {
        state.value = !state.value;
        }
    },
});

export const { toggleSidebar } = sidebarCollapsedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const sidebarCollapsed = (state: RootState) => state.theme.value;

export default sidebarCollapsedSlice.reducer;