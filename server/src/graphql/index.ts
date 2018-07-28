import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import typeDefs from './types/users';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
