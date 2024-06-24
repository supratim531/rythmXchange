import { configureStore } from "@reduxjs/toolkit";
import nft from "./reducers/nft";
import auth from "./reducers/auth";

const store = configureStore({
  reducer: {
    nft,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
