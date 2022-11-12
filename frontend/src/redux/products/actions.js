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
    console.log('hi')
    dispatch(getDataLoading());
    const {data} = await axios.get(path,config);
    console.log(data)
    dispatch(getDataSuccess(data.products));
  } catch (err) {
    console.log(err);
    dispatch(getDataError());
  }
};

const config = {
  headers:{
    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pcm1hbEBnbWFpbC5jb20iLCJpZCI6IjYzNmQyOTdlYmY1YzRjMTkyMzQxMjMyZSIsImlhdCI6MTY2ODI0MjI4OCwiZXhwIjoxNjY4NDE1MDg4fQ.yivYIeosCltq0rWnypg7HczVrjgjrxi8zl2nem4U1Zo"
  }
};
