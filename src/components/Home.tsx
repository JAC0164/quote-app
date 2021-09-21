import React, { FC, Fragment } from 'react';
import { useAppContext } from '../context/index';
import QuoteContainer from './QuoteContainer';

const Home: FC = () => {
  const appContext = useAppContext();
  return (
    <Fragment>
      {!appContext?.state.loadQuote && appContext?.state.quote && (
        <QuoteContainer quote={appContext.state.quote} />
      )}
      {appContext?.state.loadQuote && !appContext?.state.quote && (
        <div>
          <h2 className="loader">Loading...</h2>
        </div>
      )}
      {!appContext?.state.loadQuote && !appContext?.state.quote && (
        <div>
          <h2>Error !</h2>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
