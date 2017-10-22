/* eslint-disable import/prefer-default-export */
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

const AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  fields: {
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    posts: { type: GraphQLString },
  },
});

export {
  AuthorType,
};
