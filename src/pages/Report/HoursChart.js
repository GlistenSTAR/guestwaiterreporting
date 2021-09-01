import React from 'react';
import { Col, CardBody, Card } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const HoursChart = () => {
  const series = [
    {
      name: 'Gross Turnover',
      data: [
        34, 40, 28, 52, 42, 109, 100, 1479, 990, 2540, 600, 400, 490, 250, 300, 500, 800, 1946, 2154, 2023, 2240, 1240,
        0, 0, 0,
      ],
    },
    // {
    //   name: 'Last Year',
    //   data: [
    //     32, 60, 34, 46, 34, 52, 41, 1279, 1100, 2940, 590, 300, 690, 200, 246, 600, 680, 1746, 2454, 1723, 2040, 1440,
    //     0, 0, 0,
    //   ],
    // },
  ];

  const options = {
    chart: {
      stacked: !1,
      toolbar: {
        show: 1,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    // series: [
    //   // {
    //   //   name: 'This Year',
    //   //   data: [
    //   //     34, 40, 28, 52, 42, 109, 100, 1479, 990, 2540, 600, 400, 490, 250, 300, 500, 800, 1946, 2154, 2023, 2240,
    //   //     1240, 0, 0, 0,
    //   //   ],
    //   // },
    //   // {
    //   //   name: 'Last Year',
    //   //   data: [32, 60, 34, 46, 34, 52, 41],
    //   // },
    // ],
    colors: ['#f1b44c', '#5b73e8'],
    xaxis: {
      type: 'datetime',
      categories: [
        // '2018-09-19T00:00:00',
        // '2018-09-19T01:30:00',
        // '2018-09-19T02:30:00',
        // '2018-09-19T03:30:00',
        // '2018-09-19T04:30:00',
        // '2018-09-19T05:00:00',
        // '2018-09-19T06:00:00',
        '2018-09-19T07:00:00',
        '2018-09-19T08:00:00',
        '2018-09-19T09:00:00',
        '2018-09-19T10:00:00',
        '2018-09-19T11:00:00',
        '2018-09-19T12:00:00',
        '2018-09-19T13:00:00',
        '2018-09-19T14:00:00',
        '2018-09-19T15:00:00',
        '2018-09-19T16:00:00',
        '2018-09-19T17:00:00',
        '2018-09-19T18:00:00',
        '2018-09-19T19:00:00',
        '2018-09-19T20:00:00',
        '2018-09-19T21:00:00',
        '2018-09-19T22:00:00',
        '2018-09-19T23:00:00',
        '2018-09-20T00:00:00',
        '2018-09-20T01:00:00',
        '2018-09-20T02:00:00',
        '2018-09-20T03:00:00',
        '2018-09-20T04:00:00',
        '2018-09-20T05:00:00',
        '2018-09-20T06:00:00',
        '2018-09-20T07:00:00',
      ],
    },
    grid: {
      borderColor: '#f1f1f1',
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <React.Fragment>
      <Col lg={6}>
        <Card>
          <CardBody>
            <h3 className="mb-4 text-center">Gross Turnover By Hour</h3>
            <ReactApexChart options={options} series={series} type="area" height="auto" />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default HoursChart;
