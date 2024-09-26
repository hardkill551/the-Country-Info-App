import axios from 'axios';

async function get(url: string) {
  const result = await axios.get(url);
  return result.data;
}

async function post(url: string, data: unknown) {
  const result = await axios.post(url, data);
  return result.data;
}

export const request = {
  get,
  post,
};
