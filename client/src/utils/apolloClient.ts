import { ApolloClient, InMemoryCache } from '@apollo/client'
import env from "react-dotenv";

const client = new ApolloClient({
  uri: env.BASE_URL, // Replace this with your GraphQL API endpoint
  cache: new InMemoryCache(),
})

export default client
