import React from 'react';
import { Container, Row } from 'reactstrap';
import MainFilter from '../Dashboard/MainFilter';

import Family from './Family';
import FamilyChart from './FamilyChart';
import Hours from './Hours';
import Payments from './Payments';
import Statistics from './Statistics';
import StatisticsTill from './StatisticsTill';
import Tva from './Tva';
import TvaChart from './TvaChart';

const Report = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <MainFilter />
          <Family />
          <FamilyChart />
        </Row>
        <Row>
          <Tva />
          <TvaChart />
        </Row>
        <Row>
          <Payments />
          <Hours />
        </Row>
        <Row>
          <Statistics />
          <StatisticsTill />
        </Row>
      </Container>
    </div>
  );
};

export default Report;
