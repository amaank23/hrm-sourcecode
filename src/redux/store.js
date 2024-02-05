import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/Auth/authSlice";

const rootSlices = combineReducers({
  auth: authSlice
});

const store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  reducer: rootSlices,
});

export default store;
