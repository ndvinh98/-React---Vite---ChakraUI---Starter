import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionService } from "./service";
import { ITransaction } from "@/types";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transactions: null,
    transactionLastedId: null,
    transactionLastedTime: null,
  } as {
    transactions: ITransaction[] | null;
    transactionLastedId: string | null;
    transactionLastedTime: number | null;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        TransactionService.endpoints.getListTransaction.matchFulfilled,
        (state, action: PayloadAction<ITransaction[]>) => {
          state.transactions = action.payload;
          state.transactionLastedId =
            action.payload[action.payload?.length - 1]?._id;
          state.transactionLastedTime =
            action.payload[action.payload?.length - 1]?.blockUnixTime;
        }
      )
      .addMatcher(
        TransactionService.endpoints.loadMoreListTransaction.matchFulfilled,
        (state, action: PayloadAction<ITransaction[]>) => {
          if (state.transactions)
            state.transactions = [...state.transactions, ...action.payload];
          else state.transactions = action.payload;
          state.transactionLastedId =
            action.payload[action.payload?.length - 1]?._id;
          state.transactionLastedTime =
            action.payload[action.payload?.length - 1]?.blockUnixTime;
        }
      );
  },
});

export const TransactionReducer = transactionSlice.reducer;
