import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootSlices = combineReducers({});

const store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  // non serial data issue fixed
  reducer: rootSlices,
});

export default store;
