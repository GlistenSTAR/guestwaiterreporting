import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication
//import Login from './auth/login/reducer';
//import Account from './auth/register/reducer';
import ForgetPassword from './auth/forgetpwd/reducer';
import Profile from './auth/profile/reducer';

// Restaurants
import restaurantsListReducer from './restaurants/reducer';

// Restaurant Details
import restaurantDetailsReducer from './restaurant/reducer';

// Users & Profiles
import userLoginReducer from './auth/userLogin/reducer';
import userRegisterReducer from './auth/register/reducer';
import userDetailsReducer from './auth/profile/reducer';
import userUpdateProfileReducer from './auth/updateProfile/reducer';
import userListReducer from './auth/profilesList/reducer';
import userDeleteReducer from './auth/deleteUser/reducer';
import userUpdateReducer from './auth/updateUsers/reducer';

//Calendar
import calendar from './calendar/reducer';

//E-commerce
import ecommerce from './e-commerce/reducer';

//chat
import chat from './chat/reducer';

//invoices
import invoices from './invoices/reducer';

//contacts
import contacts from './contacts/reducer';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

export const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const rootReducer = combineReducers({
  // public
  restaurantsList: restaurantsListReducer,
  singleRestaurant: restaurantDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  Layout,
  //Login,
  //Account,
  ForgetPassword,
  Profile,
  calendar,
  chat,
  ecommerce,
  invoices,
  contacts,
});

export default rootReducer;
