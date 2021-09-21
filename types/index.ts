import type { Dispatch } from 'react';

export interface QuoteType {
  anime: string;
  character: string;
  quote: string;
}

export interface AppAction {
  type: string;
  value: any;
}

export interface AppState {
  quote: QuoteType | null;
  next: number;
  loadQuote: boolean;
}

export interface AppReducer {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
