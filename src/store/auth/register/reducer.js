import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from './actionTypes';

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userRegisterReducer;

// import {
//   REGISTER_USER,
//   REGISTER_USER_SUCCESSFUL,
//   REGISTER_USER_FAILED,
// } from "./actionTypes"

// const initialState = {
//   registrationError: null,
//   message: null,
//   loading: false,
//   user: null,
// }

// const account = (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER_USER:
//       state = {
//         ...state,
//         loading: true,
//         registrationError: null,
//       }
//       break
//     case REGISTER_USER_SUCCESSFUL:
//       state = {
//         ...state,
//         loading: false,
//         user: action.payload,
//         registrationError: null,
//       }
//       break
//     case REGISTER_USER_FAILED:
//       console.log(" fail", action.payload)
//       state = {
//         ...state,
//         user: null,
//         loading: false,
//         registrationError: action.payload,
//       }
//       break
//     default:
//       state = { ...state }
//       break
//   }
//   return state
// }

// export default account
