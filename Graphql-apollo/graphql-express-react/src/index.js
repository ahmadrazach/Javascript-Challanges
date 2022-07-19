import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import client from './apollo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
     <App />
    </ApolloProvider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (module.hot) module.hot.accept();

// The module.hot.accept() isn’t really necessary,
//  but makes it so that just the components changing within the app will refresh as you update them,
//  rather than refreshing the entire page. Every once in a while you may need to refresh just to reset the state of the app, but generally,
//  this leads to a quicker turnaround time.
