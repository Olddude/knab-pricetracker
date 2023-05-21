import { Request as ExpressRequest } from "express";

// Extend the Express Request interface to include the body property
export interface Request extends ExpressRequest {
  body: IReqBody;
}

export interface IReqBody {
  email: string;
  cryptocurrency: string;
}

export interface IExchangeRates {
  rates: {
    [key: string]: number;
  };
  base: string;
  date: string;
}

export interface ICryptoData {
  data: {
    [key: string]: {
      quote: {
        USD: {
          price: number;
        };
      };
    };
  };
  status: {
    timestamp: string;
    error_code: number;
    error_message: string;
  };
}
