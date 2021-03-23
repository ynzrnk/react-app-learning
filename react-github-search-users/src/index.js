import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Auth0Provider
        domain='dev-y5k24h-n.eu.auth0.com'
        clientId='gfTn4UOee39nwBuLVWapafXk91cDfOmi'
        redirectUri={window.location.origin}
        cacheLocation='localstorage'>
        <GithubProvider>
          <App />
        </GithubProvider>
      </Auth0Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
