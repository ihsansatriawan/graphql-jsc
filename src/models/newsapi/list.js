import config from 'config';
import axios from 'axios';
import URL from 'url';

import { AllNews } from './services';
import { configFetch } from './configuration';


export default (args) => {
  const url = URL.parse(AllNews);
  const params = {
    q: args.query
  }
  return axios(configFetch(url, 'get', params)).then(response => {
    console.log("response===: ", response.data);
    return response.data
  });
};

