import React from "react";
import './App.css';
import { client } from './index'
import { ApolloProvider } from "react-apollo";
import ExchangeRates from "./components/ExchangeRates/ExchangeRates";

const App = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      <header className='App-header'>
        <h2>Apollo 🚀</h2>
        <ExchangeRates />
      </header>
    </div>
  </ApolloProvider>
);

export default App
