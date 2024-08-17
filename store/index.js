import { createSlice, configureStore } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    position: 0,
  },
  reducers: {
    alterPosition(state, action) {
      state.position = action.payload;
    },
  },
});
const store = configureStore({
  reducer: uiSlice.reducer,
});

export const uiActions = uiSlice.actions;
export default store;
