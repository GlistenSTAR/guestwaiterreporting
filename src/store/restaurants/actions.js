import fetchData from '../../fetchData';
import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAIL,
} from './actionTypes';
import { initialState } from '../reducers';

export const listRestaurants = () => async (dispatch) => {
  try {
    dispatch({ type: RESTAURANT_LIST_REQUEST });

    const token = initialState.userLogin.userInfo.token;

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await fetchData.get(`/api/restaurants/`, config);

    dispatch({
      type: RESTAURANT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
