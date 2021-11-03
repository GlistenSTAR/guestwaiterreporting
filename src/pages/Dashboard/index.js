import React from 'react';
import { Container, Row } from 'reactstrap';
import MainFilter from './MainFilter';
import TopStats from './TopStats';
import TurnoverChart from './TurnoverChart';
// import WeatherCard from '../Weather/WeatherCard';

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <MainFilter />
          </Row>
          <Row>
            <TopStats />
          </Row>
          <Row>
            <TurnoverChart />
          </Row>
          <Row>
            {/* <WeatherCard /> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
