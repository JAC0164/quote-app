import React, { createContext, FC, useContext, useReducer } from 'react';
import initialState from './initialState';
import reducer from './reducer';
import type { AppReducer } from 'types';

const AppContext = createContext<AppReducer | null>(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
