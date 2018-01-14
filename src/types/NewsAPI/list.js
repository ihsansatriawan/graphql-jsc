import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';

const article = new GraphQLObjectType({
  name: 'articleType',
  fields: {
    name: { type: GraphQLString, resolve: data => data.source.name },
    author: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString },
    urlToImage: { type: GraphQLString },
    publishedAt: { type: GraphQLString },
  }
})

export const listNewsType = new GraphQLObjectType({
  name: 'listNewsType',
  fields: {
    count_news: {
      type: GraphQLInt,
      resolve: data => data.totalResults,
    },
    articles: { type: new GraphQLList(article) }
  },
});
