import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userSlice/authSlice";
import { apiSlice } from "./slices/userSlice/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
