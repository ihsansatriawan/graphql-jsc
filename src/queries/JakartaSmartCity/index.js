/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  GraphQLInt,
} from 'graphql';
import { GetKotaType, GetKelurahanType } from '../../types/JakartaSmartCity/kota';
import { getKota, getKelurahan } from '../../api/JakartaSmartCity';

const GetKotaQuery = {
  type: GetKotaType,
  args: {},
  resolve: (_, args) => getKota(),
};

const GetKelurahanQuery = {
  type: GetKelurahanType,
  args: {},
  resolve: (_, args) => getKelurahan(),
};

export {
  GetKotaQuery,
  GetKelurahanQuery,
};
