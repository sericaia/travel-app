import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import './App.css';
import CreateCity from './components/CreateCity';
import ShowCities from './components/ShowCities';
import appSyncConfig from "./aws-exports";

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CreateCity />
          <p>-----------------</p>
          <ShowCities />
        </header>
      </div>
    );
  }
}

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
)

export default WithProvider;
