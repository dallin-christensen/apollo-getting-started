import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ReactLoading from 'react-loading'

const query = gql`
{
  rates(currency: "USD") {
    currency
    rate
  }
}
`

const ExchangeRates = () => (
  <Query query={query} >
    {({ loading, error, data }) => {
      if (loading) return <ReactLoading type='bubbles' width={400} />
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates
