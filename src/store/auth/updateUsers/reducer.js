import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
} from './actionTypes';

const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };

    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_UPDATE_RESET:
      return { user: {} };

    default:
      return state;
  }
};

export default userUpdateReducer;
