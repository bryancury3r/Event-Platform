import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4on4ymx0f5e01xna8o3fidy/master',
  cache: new InMemoryCache()
})