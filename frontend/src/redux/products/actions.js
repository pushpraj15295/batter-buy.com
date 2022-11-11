import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  SET_ALL_FILTERS,
} from "./actionTypes";
import axios from "axios";

export const getDataLoading = () => ({ type: GET_DATA_LOADING });

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

export const getDataError = () => ({ type: GET_DATA_ERROR });

export const setAllFilters = (payload) => ({ type: SET_ALL_FILTERS, payload });

axios.defaults.baseURL = "http://localhost:8080";

export const getRequest = (path) => async (dispatch) => {
  try {
    dispatch(getDataLoading());
    const { data } = await axios.get(path);
    dispatch(getDataSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(getDataError());
  }
};
