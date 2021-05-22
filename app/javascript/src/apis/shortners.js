import axios from "axios";

const list = () => axios.get("/shortners");
const create = payload => axios.post("/shortners/", payload);

const shortnersApi = {
  list,
  create,
};

export default shortnersApi;
