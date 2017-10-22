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

const KelurahanType = new GraphQLObjectType({
  name: 'KelurahanType',
  fields: {
    kode_provinsi: { type: GraphQLInt },
    nama_provinsi: { type: GraphQLString },
    kode_kota: { type: GraphQLInt },
    nama_kota: { type: GraphQLString },
    kode_kecamatan: { type: GraphQLInt },
    nama_kecamatan: { type: GraphQLString },
    kode_kelurahan: { type: GraphQLInt },
    nama_kelurahan: { type: GraphQLString },
  },
});

const KecamatanType = new GraphQLObjectType({
  name: 'KecamatanType',
  fields: {
    kode_provinsi: { type: GraphQLInt },
    nama_provinsi: { type: GraphQLString },
    kode_kota: { type: GraphQLInt },
    nama_kota: { type: GraphQLString },
    kode_kecamatan: { type: GraphQLInt },
    nama_kecamatan: { type: GraphQLString },
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

const GetKelurahanType = new GraphQLObjectType({
  name: 'GetKelurahanType',
  fields: {
    status: { type: GraphQLString },
    count: { type: GraphQLInt },
    data: { type: new GraphQLList(KelurahanType) },
  },
});

const GetKecamatanType = new GraphQLObjectType({
  name: 'GetKecamatanType',
  fields: {
    status: { type: GraphQLString },
    count: { type: GraphQLInt },
    data: { type: new GraphQLList(KecamatanType) },
  },
});

export {
  GetKotaType,
  KotaType,
  KelurahanType,
  GetKelurahanType,
  KecamatanType,
  GetKecamatanType,
};
