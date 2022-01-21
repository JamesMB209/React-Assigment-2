import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUserThunk = (username, password) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}login`, {
        username:username,
        password:password
      })
      .then((res) => {
        if (res.data === null) {
          console.log("Login failed!");
        } else {
          localStorage.setItem("LoggedInToken", res.data);
          dispatch({ type: LOGIN_USER });
        }
      });
  };
};

export const signupUserThunk = (username, password) => {
  console.log("trying sign up!");
  return () => {
    axios
      .post(`${process.env.REACT_APP_API}signup`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        console.log("all done");
      });
  };
};

export const logoutNowThunk = () => (dispatch) => {
  localStorage.removeItem("LoggedInToken");
  dispatch({
    type: LOGOUT_USER,
  });
};
