import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface SidebarCollapsedState {
  value: any
}

// Define the initial state using that type
const initialState: SidebarCollapsedState = {
  value: localStorage.getItem('sidebarCollapsed') === 'true' ? true : false  || false
};

export const sidebarCollapsedSlice = createSlice({
  name: 'sidebarCollapsed',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSidebar: (state) => {
        state.value = !state.value;
        localStorage.setItem('sidebarCollapsed', state.value);
        }
    },
});

export const { toggleSidebar } = sidebarCollapsedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const sidebarCollapsed = (state: RootState) => state.sidebarCollapsed.value;

export default sidebarCollapsedSlice.reducer;