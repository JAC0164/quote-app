import type { Dispatch } from 'react';

export interface QuotesType {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: QuoteType[];
}

export interface QuoteType {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface AppAction {
  type: string;
  value: any;
}

export interface AppState {
  quote: QuoteType | null;
  next: number;
  loadQuote: 'loading' | 'finished' | 'error';
}

export interface AppReducer {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}
