import { configureStore } from "@reduxjs/toolkit";
import sheetReducer from "./slices/sheetSlice";

export const store = configureStore({
  reducer: {
    sheet: sheetReducer
  },
});
