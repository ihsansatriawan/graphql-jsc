/* eslint-disable import/prefer-default-export, no-unused-vars */
import axios from 'axios';
import config from 'config';
import URL from 'url';

const JSC_SERVICES = {
  GetKota: `${config.JSC.HOSTNAME}/v1/kota`,
  GetKelurahan: `${config.JSC.HOSTNAME}/v1/kelurahan`,
  GetKecamatan: `${config.JSC.HOSTNAME}/v1/kecamatan`,
};

const configFetch = (url, method) => ({
  method,
  url,
  headers: {
    Authorization: config.JSC.TOKEN,
  },
});

const getKota = () => {
  const url = URL.parse(JSC_SERVICES.GetKota);
  return axios(configFetch(url, 'get')).then(response => response.data);
};

const getKelurahan = () => {
  const url = URL.parse(JSC_SERVICES.GetKelurahan);
  return axios(configFetch(url, 'get')).then(response => response.data);
};

const getKecamatan = () => {
  const url = URL.parse(JSC_SERVICES.GetKecamatan);
  return axios(configFetch(url, 'get')).then(response => response.data);
};

export {
  getKota,
  getKelurahan,
  getKecamatan,
};
