import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  fetchdata,
} from "../constants";

interface FETCH_DATA_REQUEST {
  type: typeof FETCH_DATA_REQUEST;
}

interface FETCH_DATA_SUCCESS {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any;
}

interface FETCH_DATA_FAILURE {
  type: typeof FETCH_DATA_FAILURE;
  error: string;
}

export type Actiontypes =
  | FETCH_DATA_REQUEST
  | FETCH_DATA_SUCCESS
  | FETCH_DATA_FAILURE;

export const fetchExam = () => {
  return async (dispatch: Dispatch<Actiontypes>) => {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    try {
      const response = await axios.get(
        "https://fakestoreapiserver.reactbd.com/amazonproducts"
      );
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: fetchdata,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        error: "message",
      });
    }
  };
};
