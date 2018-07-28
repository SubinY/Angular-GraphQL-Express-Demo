import gqlProjection from 'graphql-advanced-projection';

const { project, resolvers } = gqlProjection({
  User: {
    proj: {
      id: '_id'
    }
  }
});

export { project, resolvers };
