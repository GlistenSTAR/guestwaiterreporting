import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import '../Controle/datacontrole.scss';
import BtnExportData from '../Controle/BtnExportData';

const WaitersBestSales = () => {
  const data = {
    columns: [
      {
        label: 'Waiter',
        field: 'waiter',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Label',
        field: 'label',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Qte',
        field: 'qte',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: [
      {
        waiter: 'KIM',
        label: 'COFFEE',
        qte: '15',
      },
      {
        waiter: 'BRAD',
        label: 'COFFEE RESTAURANT',
        qte: '23',
      },
      {
        waiter: 'SAM',
        label: 'MAIN MEAL',
        qte: '18',
      },
    ],
  };

  return (
    <Col lg={6}>
      <Card>
        <CardBody>
          <h3 className="mb-4 text-center">Best 5 Sales</h3>
          <BtnExportData />
          <MDBDataTable responsive bordered data={data} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WaitersBestSales;
