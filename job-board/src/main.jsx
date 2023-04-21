import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import App from './App'
import './index.css'

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgnx3gif6bvz01t575tqf9em/master",
  cache: new InMemoryCache()
});

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </BrowserRouter>
);