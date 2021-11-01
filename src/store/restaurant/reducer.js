import {
  SINGLE_RESTAURANT_REQUEST,
  SINGLE_RESTAURANT_SUCCESS,
  SINGLE_RESTAURANT_FAIL,
} from './actionTypes';

const restaurantDetailsReducer = (state = { restaurant: [] }, action) => {
  switch (action.type) {
    case SINGLE_RESTAURANT_REQUEST:
      return { ...state, loading: true };

    case SINGLE_RESTAURANT_SUCCESS:
      return { loading: false, restaurant: action.payload };

    case SINGLE_RESTAURANT_FAIL:
      return { loading: false, error: action.payload };

    // case SINGLE_RESTAURANT_RESET:
    //   return { restaurant: [] };

    default:
      return state;
  }
};

export default restaurantDetailsReducer;
