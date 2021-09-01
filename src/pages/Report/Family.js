import React from 'react';
import { Col, CardBody, Card } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import '../Controle/datacontrole.scss';
import BtnExportData from '../Controle/BtnExportData';

const Family = () => {
  const data = {
    columns: [
      {
        label: 'Family',
        field: 'family',
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
        label: 'Ratio',
        field: 'ratio',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'C.A',
        field: 'ca',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Ratio',
        field: 'ratio_2',
        sort: 'asc',
        width: 150,
      },
    ],
    rows: [
      {
        family: 'BAR',
        qte: '1547',
        ratio: '10.56 %',
        ca: '8,457.00 €',
        ratio_2: '13.15 %',
      },
      {
        family: 'ENTREE',
        qte: '425',
        ratio: '7.45 %',
        ca: '754.45 €',
        ratio_2: '14.40 %',
      },
      {
        family: 'FDJ',
        qte: '742',
        ratio: '8.45 %',
        ca: '856.74 €',
        ratio_2: '20.30 %',
      },
      {
        family: 'CAVE',
        qte: '148',
        ratio: '4.89 %',
        ca: '564.14 €',
        ratio_2: '21.45 %',
      },
      {
        family: 'MENUS',
        qte: '654',
        ratio: '4.78 %',
        ca: '654.68 €',
        ratio_2: '14.25 %',
      },
    ],
  };

  return (
    <Col lg={6}>
      <Card>
        <CardBody>
          <h3 className="text-center">Family</h3>
          <BtnExportData />
          <MDBDataTable responsive bordered data={data} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Family;
