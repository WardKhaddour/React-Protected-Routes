import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IState {
  isLoggedIn: boolean;
}

const initialState: IState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
