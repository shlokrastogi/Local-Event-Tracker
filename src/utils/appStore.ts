import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    config: configReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
