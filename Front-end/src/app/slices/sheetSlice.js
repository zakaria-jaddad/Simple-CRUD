import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../../api/users";

const fetchUserByID = createAsyncThunk(
  "sheetSlice/fetchUserByID",
  async (userID) => {
    const response = await Users.fetchByID(userID);
    return response;
  }
);

export const sheetSlice = createSlice({
  name: "sheetSlice",
  initialState: {
    isSheetOpen: undefined,
    userData: {},
  },
  reducers: {
    closeSheet: (state, actions) => {
      return { isSheetOpen: false, userData: {} };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByID.fulfilled, (state, actions) => {
      const { payload } = actions;

      return { isSheetOpen: true, userData: payload };
    });
  },
});

export { fetchUserByID };
export const { closeSheet } = sheetSlice.actions;
export default sheetSlice.reducer;
