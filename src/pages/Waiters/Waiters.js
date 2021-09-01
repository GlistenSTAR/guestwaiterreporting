import React from 'react';
import { Container, Row } from 'reactstrap';
import WaitersBestHours from './WaitersBestHours';
import WaitersBestSales from './WaitersBestSales';
import WaitersFilter from './WaitersFilter';
import WaitersGiftArticles from './WaitersGiftArticles';
import WaitersIncomeStats from './WaitersIncomeStats';

const Waiters = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <WaitersFilter />
          <WaitersBestSales />
          <WaitersBestHours />
        </Row>
        <Row>
          <WaitersIncomeStats />
          <WaitersGiftArticles />
        </Row>
      </Container>
    </div>
  );
};

export default Waiters;
