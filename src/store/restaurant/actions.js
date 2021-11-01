import fetchData from '../../fetchData';
import {
  SINGLE_RESTAURANT_REQUEST,
  SINGLE_RESTAURANT_SUCCESS,
  SINGLE_RESTAURANT_FAIL,
  //SINGLE_RESTAURANT_RESET,
} from './actionTypes';

import { initialState } from '../reducers';

export const getRestaurantDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_RESTAURANT_REQUEST,
    });

    const token = initialState.userLogin.userInfo.token;

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await fetchData.get(`/api/restaurants/${id}`, config);

    console.log(data);

    dispatch({
      type: SINGLE_RESTAURANT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_RESTAURANT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
