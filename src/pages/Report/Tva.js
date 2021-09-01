import React from 'react';
import { Col, CardBody, Card } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import '../Controle/datacontrole.scss';
import BtnExportData from '../Controle/BtnExportData';

const Tva = () => {
  const data = {
    columns: [
      {
        label: 'TVA Category',
        field: 'tva_perc',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'TVA',
        field: 'tva',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'HT',
        field: 'ht',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'TTC',
        field: 'ttc',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [
      {
        tva_perc: 'TVA 10 %',
        tva: '1547 €',
        ht: '15,457.56 €',
        ttc: '8,457.00 €',
      },
      {
        tva_perc: 'TVA 20 %',
        tva: '425 €',
        ht: '23,148.24 €',
        ttc: '754.45 €',
      },
      {
        tva_perc: 'TVA 5.5 %',
        tva: '742 €',
        ht: '15,486.45 €',
        ttc: '856.74 €',
      },
      {
        tva_perc: 'TVA 0 %',
        tva: '148 €',
        ht: '45,456.25 €',
        ttc: '564.14 €',
      },
    ],
  };
  return (
    <React.Fragment>
      <Col lg={6}>
        <Card>
          <CardBody>
            <h3 className="text-center">TVA</h3>
            <BtnExportData />
            <MDBDataTable responsive bordered data={data} />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Tva;
