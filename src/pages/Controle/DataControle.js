import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

//Import Breadcrumb
//import Breadcrumbs from '../../components/Common/Breadcrumb';
import './datacontrole.scss';
import BtnExportData from './BtnExportData';
//import BtnExportData from './BtnExportData';

const DataControle = () => {
  const data = {
    columns: [
      {
        label: 'Ticket Number',
        field: 'ticket_number',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Ticket Value',
        field: 'value',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Payment Method',
        field: 'payment_method',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Waiter',
        field: 'waiter',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Time',
        field: 'time',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [
      {
        ticket_number: '457866',
        value: '45.54 €',
        payment_method: 'Card',
        waiter: '61',
        time: '13:15',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '63',
        time: '14:40',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '66',
        time: '20:30',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '22',
        time: '21:45',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '33',
        time: '14:25',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '61',
        time: '13:27',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '59',
        time: '19:58',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '55',
        time: '21:07',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Cheque',
        waiter: '39',
        time: '14:18',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '23',
        time: '12:52',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Cash',
        waiter: '30',
        time: '13:48',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Cash',
        waiter: '22',
        time: '20:47',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '36',
        time: '14:54',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '43',
        time: '20:35',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Cheque',
        waiter: '19',
        time: '13:25',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '66',
        time: '13:47',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Card',
        waiter: '64',
        time: '20:39',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Cash',
        waiter: '59',
        time: '13:04',
        status: 'Paid',
      },
      {
        ticket_number: '457866',
        value: '87.94 €',
        payment_method: 'Cash',
        waiter: '41',
        time: '12:47',
        status: 'Paid',
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <BtnExportData />
                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataControle;
