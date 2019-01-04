const { GraphQLServer } = require('graphql-yoga');

const typeDefs = './src/schema.graphql';

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
];

const resolvers = {
  Query: {
    info: () => `This is the API of a hackernews Clone`,
    feed: () => links,
    link: (root, { id }) => links.find(link => link.id === id)
  },
  Mutation: {
    createLink: (root, { url, description }) => {
      const id = `link-${links.length + 1}`;
      const link = {
        id,
        description,
        url
      };

      links = [...links, link];
      return link;
    },
    updateLink: (root, { id, url, description }) => {
      const foundLink = links.find(link => link.id === id);
      const link = {
        id,
        description,
        url
      };

      links = [...links.filter(link => link.id !== id), link];

      return foundLink ? link : null;
    },
    deleteLink: (root, { id }) => {
      const foundLink = links.find(link => link.id === id)
      links = [
        ...links.filter(link => link.id !== id),
      ]

      return foundLink
    },
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('Server is running on http://localhost:4000'));
