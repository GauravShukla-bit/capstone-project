import axios from "axios";

class BaseAPI {
  static GET = (URL, onSuccess, onFailure) => {
    return axios
      .get(URL)
      .then((res) => onSuccess(res.data))
      .catch((err) => onFailure(err.response));
  };

  static POST = (URL, body, onSuccess, onFailure) => {
    return axios
      .post(URL, body)
      .then((res) => onSuccess(res.data))
      .catch((err) => onFailure(err.response));
  };
}

export default BaseAPI;
