import React, { useState, useEffect } from 'react';
import { Col, Row, Card, CardImg } from 'reactstrap';

const Weather = () => {
  const apiKey = '39bae69bf5b295d05a565b7a1e369a1f';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/';

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const defaultValue = `${baseUrl}weather?q=chambery&units=metric&APPID=${apiKey}`;
    fetch(defaultValue)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery('');
      });
  }, []);

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${baseUrl}weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
        })
        .catch((e) => console.log('error' + e));
    }
  };

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <Col lg={6}>
      <Card>
        <div className="search text-center mt-2">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <Row className="g-0 align-items-center">
            <Col md={4}>
              <CardImg className="img-fluid" src={`/images/icons/${weather.weather[0].icon}.png`} alt="Weather Image" />
            </Col>

            <Col md={4} className="text-center">
              <h4 className="my-2">
                {weather.name}, {weather.sys.country}
              </h4>
              <h6 className="date">{dateBuilder(new Date())}</h6>
              <h3 className="weather">{weather.weather[0].description}</h3>
            </Col>
            <Col md={4}>
              <div className="temp text-center">
                <h1 className="display-3">{Math.round(weather.main.temp) + ' °C'}</h1>
              </div>
            </Col>
          </Row>
        ) : (
          ''
        )}
      </Card>
    </Col>
  );
};

export default Weather;
