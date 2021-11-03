import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { listRestaurants } from '../store/actions';

import { Form } from 'react-bootstrap';

function RestaurantsList(props) {
  const dispatch = useDispatch();
  const restaurantsList = useSelector((state) => state.restaurantsList);
  const { error, loading, restaurants } = restaurantsList;

  useEffect(() => {
    dispatch(listRestaurants());
  }, [dispatch]);

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
  return { restaurantsList: state.restaurantsList };
};

export default connect(mapStateToProps, { listRestaurants })(RestaurantsList);
