import { GraphQLString } from 'graphql';

import { getKota, getKelurahan, getKecamatan } from '../../api/JakartaSmartCity';
import listNews from '../../models/newsapi/list.js';
import { listNewsType } from '../../types/NewsAPI/list';

const GetListNews = {
  type: listNewsType,
  args: {
    query: { type: GraphQLString },
  },
  resolve: (_, args) => listNews(args),
};

export { GetListNews };
