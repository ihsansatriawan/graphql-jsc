/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  GraphQLInt,
} from 'graphql';
import { GetKotaType, GetKelurahanType, GetKecamatanType } from '../../types/JakartaSmartCity/kota';
import { getKota, getKelurahan, getKecamatan } from '../../api/JakartaSmartCity';

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

const GetKecamatanQuery = {
  type: GetKecamatanType,
  args: {},
  resolve: (_, args) => getKecamatan(),
};

export {
  GetKotaQuery,
  GetKelurahanQuery,
  GetKecamatanQuery,
};
