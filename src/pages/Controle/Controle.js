import React from 'react';
import DataControle from './DataControle';
import { Row, Container } from 'reactstrap';
import FilterControl from './FilterControl';

const Controle = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <FilterControl />
          <DataControle />
        </Row>
      </Container>
    </div>
  );
};

export default Controle;
