import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import dotenv from 'dotenv'
dotenv.config()

const PORT: number = Number(process.env.PORT) || 7000

async function startServer() {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log(`🚀 Connected to Mongo at ${process.env.MONGO_URI}`)

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
    })
    console.log(`🚀 Server ready at ${url}`)
}
startServer()