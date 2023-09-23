import React, { FC, Fragment } from 'react';
import type { AppState } from 'types';
import { useAppContext } from '../context/index';
import { ErrorCp } from './ErrorCp';
import { Loading } from './Loading';
import QuoteContainer from './QuoteContainer';

const contentMapping: Record<AppState['loadQuote'], any> = {
  finished: QuoteContainer,
  loading: Loading,
  error: ErrorCp,
};

const Home: FC = () => {
  const appContext = useAppContext();

  const Content = contentMapping[appContext?.state.loadQuote || 'error'];

  return (
    <Fragment>
      <Content {...appContext?.state} />
    </Fragment>
  );
};

export default Home;
