# GraphQL for [Jakarta Smart City](http://api.jakarta.go.id) [![Build Status](https://travis-ci.org/ihsansatriawan/graphql-jsc.svg?branch=master)](https://travis-ci.org/ihsansatriawan/graphql-jsc)
Based on [Graphql Boilerplate](https://github.com/ihsansatriawan/graphql-boilerplate)

## Installation

`npm install`

## Development

`npm run watch`

Example Query
```
{
  getKecamatan {
    status
    count
    data {
      kode_provinsi
      kode_kota
      nama_kota
      nama_provinsi
      nama_kecamatan
    }
  }
}
```
Recommended use [Insomnia](https://insomnia.rest/blog/introducing-graphql/) for tested Query

## Production

`npm run start`
