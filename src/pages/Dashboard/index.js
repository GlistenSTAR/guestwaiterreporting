import React from 'react';
import { Container, Row } from 'reactstrap';

import MainFilter from './MainFilter';
import TopStats from './TopStats';
import ChartDash from './ChartDash';
import Weather from '../Weather/Weather';

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
            <ChartDash />
          </Row>
          <Row>
            <Weather />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
