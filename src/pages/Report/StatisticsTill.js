import React from 'react';
import { Col, CardBody, Card } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import '../Controle/datacontrole.scss';
import BtnExportData from '../Controle/BtnExportData';

const StatisticsTill = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Qte',
        field: 'qte',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'C.A',
        field: 'ca',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Till',
        field: 'till',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: [
      {
        type: 'DIRECT SALES',
        qte: '1547',
        ca: '15,457.56 €',
        till: 'Till 2',
      },
      {
        type: 'TICKETS PAID',
        qte: '425',
        ca: '23,148.24 €',
        till: 'Till 4',
      },
      {
        type: 'SALE TABLES',
        qte: '742',
        ca: '15,486.45 €',
        till: 'Till 1',
      },
    ],
  };

  return (
    <React.Fragment>
      <Col lg={6}>
        <Card>
          <CardBody>
            <h3 className="mb-4 text-center">Statistics By Till</h3>
            <BtnExportData />
            <MDBDataTable responsive bordered data={data} />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default StatisticsTill;
