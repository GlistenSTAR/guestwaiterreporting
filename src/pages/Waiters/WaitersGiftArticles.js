import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import '../Controle/datacontrole.scss';
import BtnExportData from '../Controle/BtnExportData';

const WaitersGiftArticles = () => {
  const data = {
    columns: [
      {
        label: 'Waiter',
        field: 'waiter',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Total',
        field: 'total',
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
        total: '45.80 €',
        qte: '15',
      },
      {
        waiter: 'BRAD',
        total: '87.24 €',
        qte: '23',
      },
      {
        waiter: 'SAM',
        total: '24.45 €',
        qte: '18',
      },
    ],
  };

  return (
    <Col lg={6}>
      <Card>
        <CardBody>
          <h3 className="mb-4 text-center">Gift Articles</h3>
          <BtnExportData />
          <MDBDataTable responsive bordered data={data} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WaitersGiftArticles;
