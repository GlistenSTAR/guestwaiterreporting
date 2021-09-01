import React from 'react';
import { Container, Row } from 'reactstrap';
import ProgramData from './ProgramData';

const Program = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <ProgramData />
        </Row>
      </Container>
    </div>
  );
};

export default Program;
