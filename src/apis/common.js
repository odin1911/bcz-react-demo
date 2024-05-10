import axios from 'axios';

function list() {
  return axios.get('https://example.com/list');
}

export const commonApi = {
  list,
};
