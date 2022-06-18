import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../utils";
import { ITransaction, TransactionsType } from "@/types";

export const TransactionService = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.solscan.io",
    onError: (err) => console.error("Error", err),
  }),
  reducerPath: "TransactionService",
  endpoints: (builder) => ({
    getListTransaction: builder.query<
      ITransaction[],
      {
        address: string;
        type?: TransactionsType;
        offset?: number;
        limit?: number;
      }
    >({
      query: ({ address, type, offset, limit }) => ({
        url: "/amm/txs",
        method: "GET",
        params: {
          address,
          type: type || "all",
          offset: offset || 0,
          limit: limit || 10,
        },
      }),
      transformResponse: (response: any) =>
        response?.data?.items as ITransaction[],
    }),
    loadMoreListTransaction: builder.query<
      ITransaction[],
      {
        before_id: string;
        before_time: number;
        address: string;
        type?: TransactionsType;
        offset?: number;
        limit?: number;
      }
    >({
      query: ({ address, before_id, before_time, type, offset, limit }) => ({
        url: "/amm/txs",
        method: "GET",
        params: {
          address,
          before_id,
          before_time,
          type: type || "all",
          offset: offset || 0,
          limit: limit || 10,
        },
      }),
      transformResponse: (response: any) =>
        response?.data?.items as ITransaction[],
    }),
  }),
});

export const {
  useGetListTransactionQuery,
  useLazyLoadMoreListTransactionQuery,
} = TransactionService;
