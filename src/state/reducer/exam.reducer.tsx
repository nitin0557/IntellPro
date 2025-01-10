import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constants";
import { Actiontypes } from "../action/exam.action";

interface State {
  loading: boolean;
  data: any;
  error: string | null;
}
const initialState: State = {
  loading: false,
  data: [],
  error: null,
};

export function dataReducer(state = initialState, action: Actiontypes): State {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

      break;
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

      break;
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

      break;
    default:
      return state;
  }
}
