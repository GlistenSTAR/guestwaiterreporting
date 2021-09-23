import React from 'react';

class Location extends React.Component {
  state = {
    lat: null,
    long: null,
    city: null,
    errMsg: '',
  };

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getCoords = async (latitude, longitude) => {
    const dataLanLong = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    await dataLanLong
      .json()
      .then((data) => this.setState({ city: data.results[0].address_components[2].long_name }))
      .catch((error) => console.log(error))
  };

  componentDidMount() {
    this.getPosition()
      .then((position) => {
        this.getCoords(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return <h5 className="city">{this.state.city}</h5>;
  }
}

export default Location;
