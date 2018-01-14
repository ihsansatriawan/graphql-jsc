import config from 'config';

export const configFetch = (url, method, params = {}) => ({
  method,
  url,
  headers: {
    'X-Api-Key': config.NEWS_API.TOKEN,
  },
  params,
});