import axios from "axios";

const setAuthToken = (token: any) => {
  console.log('authtoken', token)
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
