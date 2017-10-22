/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  GraphQLInt,
} from 'graphql';
import { AuthorType } from '../../types/author';

const AuthorData = {
  id: 1,
  firstName: 'haloo',
  lastName: 'haloo',
  posts: 'haloo',
};

const AuthorMutation = {
  type: AuthorType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, args) => AuthorData,
};

export {
  AuthorMutation,
};
