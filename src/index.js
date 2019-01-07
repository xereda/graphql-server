const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const typeDefs = './src/schema.graphql';

const resolvers = {
  Query: {
    info: () => `This is the API of a hackernews Clone`,
    feed: (root, args, context) => {
      console.log('prisma: ', context.prisma.links())
      return context.prisma.links()
    },
    link: (root, { id }) => links.find(link => link.id === id)
  },
  Mutation: {
    createLink: (
      root,
      { url, description },
      context,
    ) => {
      return context.prisma.createLink({
        url,
        description,
      })
    },
    updateLink: (
      root, 
      { id, url, description }, 
      context,
    ) => {
      return context.prisma
        .updateLink({ 
          data: { url, description }, 
          where: { id },
        })
    },
    deleteLink: (root, { id }, context) => {
      return context.prisma
        .deleteLink({ id })
    },
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { prisma },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
