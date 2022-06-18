import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  Provider,
} from "react-redux";
import {
  TokenInfoService,
  TokenInfoReducer,
  TokenInfoDetailService,
} from "./token-info";

import { TransactionService, TransactionReducer } from "./transaction";

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: combineReducers({
    [TokenInfoService.reducerPath]: TokenInfoService.reducer,
    [TokenInfoDetailService.reducerPath]: TokenInfoDetailService.reducer,
    [TransactionService.reducerPath]: TransactionService.reducer,
    TokenInfo: TokenInfoReducer,
    Transaction: TransactionReducer,
  }),
  devTools: true,
});

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

export const ReduxProvider: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
