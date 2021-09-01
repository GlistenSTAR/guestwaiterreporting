import React from 'react';
import { Col, CardBody, Card } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

const TvaChart = () => {
  const series = [148, 742, 1547, 425];
  const options = {
    labels: ['0%', '5.5%', '10%', '20%'],
    colors: ['#34c38f', '#5b73e8', '#f1b44c', '#f46a6a'],
    legend: {
      show: !0,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: !1,
      fontSize: '14px',
      offsetX: 0,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: !1,
          },
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <Col lg={6}>
        <Card>
          <CardBody>
            <h3 className="mb-4 text-center">TVA Chart</h3>
            <ReactApexChart options={options} series={series} type="pie" height="460" />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default TvaChart;
