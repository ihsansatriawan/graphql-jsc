/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  GraphQLInt,
} from 'graphql';
import { AuthorType } from '../../types/author';
import { getKota } from '../../api/JakartaSmartCity';

const AuthorData = {
  id: 1,
  firstName: 'haloo',
  lastName: 'haloo',
  posts: 'haloo',
};

const AuthorQuery = {
  type: AuthorType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, args) => getKota(),
};

export {
  AuthorQuery,
};
