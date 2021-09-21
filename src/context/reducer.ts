import type { Reducer } from 'react';
import type { AppAction, AppState } from 'types';
import { actions } from './actions';

const reducer: Reducer<AppState, AppAction> = (state, action) => {
  switch (action.type) {
    case actions.SET_QUOTE:
      return { ...state, quote: action.value };
    case actions.SET_NEXT:
      return { ...state, next: action.value };
    case actions.TOGGLE_QUOTE_LOAD:
      return { ...state, loadQuote: action.value };
    default:
      return state;
  }
};

export default reducer;
