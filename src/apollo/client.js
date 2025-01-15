import fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `${process.env.STRAPI_URL}/graphql`,
  fetch: fetch,
  cache: new InMemoryCache(),
});