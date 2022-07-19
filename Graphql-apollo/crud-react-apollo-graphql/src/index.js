import React from 'react';
import ReactDOM from 'react-dom/client';
import AppoloClient from 'apollo-boost';
import { ApolloProvider} from '@apollo/react-hooks';

const client = new AppoloClient({
  uri:'http://localhost:8050'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <h1>Simple GraphQL client</h1>
    </ApolloProvider>
  </React.StrictMode>
);
