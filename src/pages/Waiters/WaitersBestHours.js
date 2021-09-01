import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import '../Controle/datacontrole.scss';
import BtnExportData from '../Controle/BtnExportData';

const WaitersBestHours = () => {
  const data = {
    columns: [
      {
        label: 'Waiter',
        field: 'waiter',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Hour',
        field: 'hour',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Amount (€)',
        field: 'amount',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: [
      {
        waiter: 'KIM',
        hour: '14 H',
        amount: '1,575.80',
      },
      {
        waiter: 'BRAD',
        hour: '13 H',
        amount: '1,247.56',
      },
      {
        waiter: 'SAM',
        hour: '14 H',
        amount: '1,174.25',
      },
    ],
  };

  return (
    <Col lg={6}>
      <Card>
        <CardBody>
          <h3 className="mb-4 text-center">Best 5 Hours</h3>
          <BtnExportData />
          <MDBDataTable responsive bordered data={data} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WaitersBestHours;
