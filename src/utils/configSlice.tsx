import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    theme: "light",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeLang, changeTheme } = configSlice.actions;
export default configSlice.reducer;
