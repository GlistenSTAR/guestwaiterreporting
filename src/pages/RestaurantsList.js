import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { listRestaurants } from '../store/actions';

import { Form } from 'react-bootstrap';

function RestaurantsList({ restaurantsList, userInfo }) {
  const dispatch = useDispatch();
  let temp = [];
  let [list, setList] = useState(restaurantsList);

  useEffect(() => {
    dispatch(listRestaurants());
  }, [dispatch]);

  useEffect(() => {
    if (restaurantsList.restaurants.length > 0) {
      if (!userInfo.isAdmin) {
        restaurantsList.restaurants.map((item) => {
          if (userInfo._id === item.manager._id) {
            temp.push(item);
          }
        });
      } else {
        temp = restaurantsList.restaurants;
      }
    }
    setList({ ...restaurantsList, restaurants: temp });
  }, [restaurantsList]);

  const { error, loading, restaurants } = list;

  return (
    <div className="main-restaurant-div">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="select-container">
          <Form.Select name="" id="">
            {restaurants.map((restaurant) => (
              <option key={restaurant._id} value={restaurant.restaurant_name}>
                {restaurant.restaurant_name}
              </option>
            ))}
          </Form.Select>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurantsList: state.restaurantsList,
    userInfo: state.userLogin.userInfo,
  };
};

export default connect(mapStateToProps, { listRestaurants })(RestaurantsList);
