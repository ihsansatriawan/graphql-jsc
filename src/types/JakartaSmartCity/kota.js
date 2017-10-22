import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const KotaType = new GraphQLObjectType({
  name: 'KotaType',
  fields: {
    kode_provinsi: { type: GraphQLInt },
    nama_provinsi: { type: GraphQLString },
    kode_kota: { type: GraphQLInt },
    nama_kota: { type: GraphQLString },
  },
});

const GetKotaType = new GraphQLObjectType({
  name: 'GetKotaType',
  fields: {
    status: { type: GraphQLString },
    count: { type: GraphQLInt },
    data: { type: new GraphQLList(KotaType) },
  },
});

export {
  GetKotaType,
  KotaType,
};
