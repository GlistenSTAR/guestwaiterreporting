import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  //USER_UPDATE_PROFILE_RESET,
} from './actionsType';

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    // case USER_UPDATE_PROFILE_RESET:
    //   return {};

    default:
      return state;
  }
};

export default userLoginReducer;
