export type ExchangeType = "uniswap" | "pancake" | "raydium" | "sushiswap";
export interface ITokenInfo {
  name: string;
  pair_id: string;
  lp_mint: string;
  official: boolean;
  liquidity: number;
  market: string;
  volume_24h: number;
  volume_24h_quote: number;
  fee_24h: number;
  fee_24h_quote: number;
  volume_7d: number;
  volume_7d_quote: number;
  fee_7d: number;
  fee_7d_quote: number;
  price: number;
  lp_price: number;
  amm_id: string;
  token_amount_coin: number;
  token_amount_pc: number;
  token_amount_lp: number;
  apy: number;
}

export interface IToken {
  symbol: string;
  address: string;
  name: string;
  icon: string;
  website: string;
  twitter: string;
}

export interface ITokenDetailInfo {
  name: string;
  pair_id: string;
  lpMint: string;
  official: boolean;
  liquidity: number;
  market: string;
  volume_24h: number;
  volume_24h_quote: number;
  fee24h: number;
  fee_24h_quote: number;
  volume_7d: number;
  volume_7d_quote: number;
  fee_7d: number;
  fee_7d_quote: number;
  price: number;
  lp_price: number;
  amm_id: string;
  apy: number;
  liquidityChangePercentage24h: number;
  volume24hChangePercentage24h: number;
  base: IToken;
  quote: IToken;
  token_amount_coin: number;
  token_amount_pc: number;
  token_amount_lp: number;
  amountQuote: number;
  volume24h: number;
  volume7d: number;
  amountBase: number;
}

export interface IParsedInstruction {
  programId: string;
  program: string;
  type: string;
}
export interface IQuote {
  symbol: string;
  decimals: number;
  mint: string;
  amount: number;
  typeSwap: string;
}

export interface IBase {
  symbol: string;
  decimals: number;
  mint: string;
  amount: number;
  typeSwap: string;
}

export type TransactionsType =
  | "all"
  | "swap"
  | "add-liquidity"
  | "remove-liquidity";

export interface ITransaction {
  _id: string;
  quote: IQuote;
  base: IBase;
  basePrice: number;
  quotePrice: number;
  volume?: number;
  volumeUSD?: number;
  txHash: string;
  slot: number;
  source: string;
  blockUnixTime: number;
  blockHumanTime: Date;
  txType: TransactionsType;
  ammId: string;
  address: string;
  owner: string;
  txStatus: string;
  outliers: boolean;
  createdAt: Date;
  updatedAt: Date;
}
