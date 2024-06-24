import { createReducer } from "@reduxjs/toolkit";
import { fetchAllSongsConstant } from "../actions/businessActions";

const initialState = {
  songs: [],
};

const businessReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchAllSongsConstant, (state, action) => {
    state.songs = action.payload;
  });
});

export default businessReducer;
