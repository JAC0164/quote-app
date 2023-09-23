import type { AppState } from 'types';

const initialState: AppState = {
  quote: null,
  next: 0,
  loadQuote: 'loading',
};

export default initialState;
