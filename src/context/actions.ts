import type { AppAction, QuoteType } from '../../types/index';

export const actions = {
  SET_QUOTE: 'set-quote',
  SET_NEXT: 'set-next',
  TOGGLE_QUOTE_LOAD: 'toggle-quote-load',
};

export const setQuote = (value: QuoteType | null): AppAction => ({
  type: actions.SET_QUOTE,
  value,
});

export const toggleQuoteLoad = (value: boolean): AppAction => ({
  type: actions.TOGGLE_QUOTE_LOAD,
  value,
});

export const setNext = (value: number): AppAction => ({
  type: actions.SET_NEXT,
  value,
});
