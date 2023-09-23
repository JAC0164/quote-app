import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BsArrowRepeat } from 'react-icons/bs';
import Home from './components/Home';
import { getQuote } from './util';
import { useAppContext } from './context';
import { setNext, setQuote, toggleQuoteLoad } from './context/actions';
import './App.scss';
import Author from './components/Author';
import Page_404 from './components/Page_404';

const App = () => {
  const appContext = useAppContext();

  useEffect(() => {
    getQuote()
      .then((q) => {
        appContext?.dispatch(setQuote(q));
        appContext?.dispatch(toggleQuoteLoad('finished'));
      })
      .catch((e) => {
        console.error(e);
        appContext?.dispatch(toggleQuoteLoad('error'));
      });
  }, [appContext?.state.next]);

  const getNext = () => {
    appContext?.dispatch(setQuote(null));
    appContext?.dispatch(toggleQuoteLoad('loading'));
    appContext?.dispatch(setNext(appContext.state.next + 1));
  };

  return (
    <Router>
      <div className="container">
        <header>
          <Link to="/" className="random" onClick={getNext}>
            <span>random</span>
            <span>
              <BsArrowRepeat />
            </span>
          </Link>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/author/:name" exact component={Author} />
            <Route component={Page_404} />
          </Switch>
        </main>
        <footer>
          created by <a href="https://github.com/charo164/">charo164</a> -
          devChallenges.io
        </footer>
      </div>
    </Router>
  );
};

export default App;
