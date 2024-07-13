import { AuthUrls } from "./API_CONSTANTS";
import BaseAPI from "./BaseApi";

class AuthService {
  static postUserAuth(onSuccess, onFailure) {
    return BaseAPI.GET(AuthUrls.POST_AUTHENTICATE, onSuccess, onFailure);
  }

  static postUserSignUp(payload, onSuccess, onFailure) {
    return BaseAPI.POST(AuthUrls.POST_SIGNUP, payload, onSuccess, onFailure);
  }

  static postUserLogin(payload, onSuccess, onFailure) {
    return BaseAPI.POST(AuthUrls.POST_LOGIN, payload, onSuccess, onFailure);
  }
}

export default AuthService;
