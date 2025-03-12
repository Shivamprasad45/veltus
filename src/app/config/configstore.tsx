import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ORDER_API } from "../Services/loginServices";

export const store = configureStore({
  reducer: {
    //   Number: MobileNumberSlice,
    //   // Add the generated reducer for TreeOrder_API as a specific top-level slice
    //   [Rentel_HOME_API.reducerPath]: Rentel_HOME_API.reducer,
    //   [USer_API.reducerPath]: USer_API.reducer,
    [ORDER_API.reducerPath]: ORDER_API.reducer,
    // You can add other reducers here, for example:
    // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // Rentel_HOME_API.middleware,
      // USer_API.middleware,

      ORDER_API.middleware
    ),
});

// Setup listeners for refetching on focus, reconnect, etc.
setupListeners(store.dispatch);

// TypeScript types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
