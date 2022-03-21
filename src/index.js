import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from  'react-router-dom'
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
 
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>
  </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);


