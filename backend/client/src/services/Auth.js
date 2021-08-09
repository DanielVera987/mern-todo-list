import { helpHttp } from "../helpers/helpHttp";

const auth = {};
const url = "http://localhost:5000/v1/auth";
const api = helpHttp();

auth.login = async (data) => {
  const options = {
    body: data,
    headers: { "content-type": "application/json" },
  };

  const resp = await api.post(`${url}/login`, options);
  return resp;
};

export default auth;
