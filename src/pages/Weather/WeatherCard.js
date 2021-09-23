import React from 'react';
import { Col, Card, CardImg, CardBody } from 'reactstrap';
import moment from 'moment';
import 'moment/locale/fr';
import Location from './Location';

class WeatherCard extends React.Component {
  state = {
    fullData: [],
  };

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getWeather = async (latitude, longitude) => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?&cnt=6&units=metric&lang=fr&lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    await api_call.json().then((data) => {
      this.setState({ fullData: data.list });
    });
  };

  componentDidMount() {
    this.getPosition()
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <>
        {this.state.fullData.map((data, index) => {
          const temColor = Math.round(data.temp.day);
          return (
            <Col mg={2} xl={2} reading={data} index={index} key={index}>
              <Card className="text-center weather-img">
                <CardImg
                  top
                  className="img-fluid"
                  src={`/images/icons/${data.weather[0].icon}.png`}
                  alt="Weather Image"
                />
                <CardBody>
                  <Location />
                  <h5 className="date my-3">{moment(data.dt * 1000).format('ddd Do MMM YYYY')}</h5>
                  <div className="weather mb-3">
                    <h5>{data.weather[0].description}</h5>
                  </div>
                  <div className="temp text-center">
                    <h1 className={`${temColor > 16 ? 'hot' : 'cold'}`}>
                      {Math.round(data.temp.day)} °C
                    </h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </>
    );
  }
}

export default WeatherCard;
