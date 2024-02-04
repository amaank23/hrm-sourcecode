import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootSlices = combineReducers({});

const store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  reducer: rootSlices,
});

export default store;
