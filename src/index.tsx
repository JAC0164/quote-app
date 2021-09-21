import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContextProvider from './context';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
