import { createReducer } from "@reduxjs/toolkit";
import { loginConstant } from "../actions/authActions";

const initialState = {
  wallet: null,
  signer: null,
  provider: null,
  nftContract: null,
  businessContract: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginConstant, (state, action) => {
    state.wallet = action.payload.wallet;
    state.signer = action.payload.signer;
    state.provider = action.payload.provider;
    state.nftContract = action.payload.nftContract;
    state.businessContract = action.payload.businessContract;
  });
});

export default authReducer;
