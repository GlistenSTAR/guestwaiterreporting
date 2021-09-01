import React from 'react';
import { Col, CardBody, Card } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const Payments = () => {
  const series = [
    {
      data: [70, 95, 550, 584, 780, 1100, 1220, 1365],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ' €';
      },
      offsetY: 0,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors: ['#5b73e8'],
    grid: {
      borderColor: '#f1f1f1',
    },
    xaxis: {
      categories: [
        'Gifts',
        'Gifts Tables',
        'Restaurant Tickets',
        'Cheque Holiday',
        'Cheques',
        'Bank Transfer',
        'Cash',
        'Card',
      ],
    },
  };

  return (
    <React.Fragment>
      <Col lg={6}>
        <Card>
          <CardBody>
            <h3 className="mb-4 text-center">Payments</h3>
            <ReactApexChart options={options} series={series} type="bar" height="auto" />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Payments;
