import axios from "axios";

const list = () => axios.get("/shortners");
const create = payload => axios.post("/shortners/", payload);
const show = code => axios.get(`/shortners/${code}`);
const shortnersApi = {
  list,
  create,
  show,
};

export default shortnersApi;
