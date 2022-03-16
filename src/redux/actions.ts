import axios from "axios";
import { actionTypes } from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const fetchEvents = () => async (dispatch: any) => {
  try {
    const events = await axios.get(
      "https://boiling-cliffs-76513.herokuapp.com/api/v1/events"
    );
    dispatch(fetchSuccess(events.data.data));
  } catch (error: any) {
    toast("fetching events failed .... ", error.message);
    return;
  }
};

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      const login = await axios.post(
        "https://boiling-cliffs-76513.herokuapp.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("login_token", login.data.data);
      dispatch(loginSuccess(login.data.data));
      toast("login Successfull.........");
    } catch (error: any) {
      toast("Login in user failed .... ", error.message);
      return;
    }
  };

export const logout = () => async (dispatch: any) => {
  try {
    localStorage.clear();
    dispatch(logoutSuccess());
    toast("loggedout..........");
  } catch (error: any) {
    toast("Logout user failed .... ", error.message);
    return;
  }
};

export const addEvent = (data: any) => async (dispatch: any) => {
  try {
    const token = localStorage.getItem("login_token") as string;

    const event = await axios.post(
      "https://boiling-cliffs-76513.herokuapp.com/api/v1/events",
      data,
      { headers: { Authorization: `Bearer ${token}` } }
    );
      
    dispatch(addEventSuccess(event.data.data));
    return;
  } catch (error: any) {
    toast("creating new event failed .... ", error.message);
    return;
  }
};

export const addEventSuccess = (payload: any) => {
  return {
    type: actionTypes.ADD_EVENT,
    payload,
  };
};

export const loginSuccess = (payload: any) => {
  return {
    type: actionTypes.LOGIN,
    payload,
  };
};
export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
const fetchSuccess = (payload: any) => {
  return {
    type: actionTypes.FETCH_EVENTS,
    payload,
  };
};
