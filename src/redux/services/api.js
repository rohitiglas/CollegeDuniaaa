import {create} from 'apisauce';
import {BASE_API_URL} from './config';

export const api = create({
  baseURL: BASE_API_URL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
