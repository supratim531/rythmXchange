import { createReducer } from "@reduxjs/toolkit";
import { fetchAllSongsConstant } from "../actions/businessActions";

const initialState = {
  nfts: [],
};

const businessReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchAllSongsConstant, (state, action) => {
    state.nfts = action.payload;
  });
});

export default businessReducer;
