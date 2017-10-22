/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  GraphQLInt,
} from 'graphql';
import { GetKotaType } from '../../types/JakartaSmartCity/kota';
import { getKota } from '../../api/JakartaSmartCity';

const GetKotaQuery = {
  type: GetKotaType,
  args: {},
  resolve: (_, args) => getKota(),
};

export {
  GetKotaQuery,
};
