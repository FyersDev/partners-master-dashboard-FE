import { API } from "./settings";
import axios from "axios";
import {
  SignIn,
  SignOut,
  SigninLoading,
  SignInFail,
  AuthStatus,
  SetActionPermissions,
} from "../store/actions/index";
import {SelectedRoute} from "../store/actions/common"

import api from "./base";
import { STATUS_API } from "./apis";

// Login api
export function LoginAPI(e, username, password) {
  e.preventDefault();
  return function (dispatch) {
    username = username.toUpperCase();
    dispatch(SigninLoading(true));
    const requestOptions = {
      url: API + "account/login/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { username, password, source: "Web" },
    };

    // login http post call
    // axios(requestOptions)
    //   	.then(function (response) {
    //         let user_id = response.data.user_id;
    // 		localStorage.setItem('token', response.data.auth_token);
    // 		localStorage.setItem('user_id', user_id);
    // 		statusAPI()(dispatch);
    //   	})
    // 	.catch(function (error) {
    // 		if (error.message === 'Network Error') {
    // 			dispatch(SignInFail(true, ["Check your internet connection"]));
    // 		} else {
    // 			dispatch(SignInFail(true, [error.response.data.message]));
    // 		}
    // 		dispatch(SigninLoading(false));
    // 		setTimeout(()=>dispatch(SignInFail(false, [])), 3000);
    // 	});
    localStorage.setItem("token", "response.data.auth_token");
    localStorage.setItem("user_id", "Chytra K R");
    dispatch(SignIn({}));
    dispatch(AuthStatus(true));
  };
}

// Login api
export function LogoutAPI() {
  return function (dispatch) {
    localStorage.setItem("token", "");
    localStorage.setItem("user_id", "");
    dispatch(SetActionPermissions([]));
    dispatch(SignOut());
    dispatch(SelectedRoute("/ap-list"))
  };
}

// authentication checking api
export function statusAPI() {
  return function (dispatch) {
    let user_id = localStorage.getItem("user_id");
    // api(STATUS_API + `?user_id=${user_id}`).then(
    //   (resp) => {
    //     // dispatch(SetActionPermissions(resp.log_action_permissions))
    //     dispatch(SignIn(resp));
    //     dispatch(AuthStatus(true));
    //   },
    //   (error) => {
    //     if (error.message === "Network Error") {
    //       return alert("Check your internet connection");
    //     }
    //     dispatch(AuthStatus(true));
    //     if (error.response && error.response.status === 401) {
    //       return dispatch(SignOut());
    //     }
    //   }
    // );
    dispatch(AuthStatus(true));
  };
}
