import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  access: string;
  refresh: string;
}

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  access: "",
  refresh: "",
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) => {
      state.isAuthenticated = true;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
    },
    updateAuth: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.access = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.access = "";
      state.refresh = "";
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAuth, updateAuth, logout, finishInitialLoad } =
  authSlice.actions;
export default authSlice.reducer;
