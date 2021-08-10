import { helpHttp } from '../helpers/helpHttp';

const tasks = {};
const url = '/v1/task';
const api = helpHttp();

tasks.all = async () => {
  const options = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer: ${localStorage.getItem('token')}`,
    },
  };

  const resp = await api.get(`${url}/all`, options);
  return resp;
};

tasks.create = async (data) => {
  const options = {
    body: data,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer: ${localStorage.getItem('token')}`,
    },
  };

  const resp = await api.post(`${url}`, options);
  return resp;
};

tasks.update = async (id, data) => {
  const options = {
    body: data,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer: ${localStorage.getItem('token')}`,
    },
  };

  const resp = await api.put(`${url}/${id}`, options);
  return resp;
};

tasks.delete = async (id) => {
  const options = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer: ${localStorage.getItem('token')}`,
    },
  };

  const resp = await api.del(`${url}/${id}`, options);
  return resp;
};

export default tasks;
