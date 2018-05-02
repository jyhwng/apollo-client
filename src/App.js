import React, { Component } from 'react';

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

import { ApolloProvider } from 'react-apollo'
import { ExchangeRates } from './components/ExchangeRates'

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client.query({
  query: gql`
  {
    rates(currency: "USD") {
      currency
    }
  }`
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app <span role="img" aria-label="emoji">🚀</span></h2>
          <ExchangeRates/>
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
