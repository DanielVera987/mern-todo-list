import { helpHttp } from "../helpers/helpHttp";

const tasks = {};
const url = "http://localhost:5000/v1/task";
const api = helpHttp();

tasks.all = async (data) => {
  const options = {
    body: data,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer: ${localStorage.getItem("token")}`,
    },
  };

  const resp = await api.get(`${url}/`, options);
  return resp;
};

export default tasks;
