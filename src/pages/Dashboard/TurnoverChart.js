import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardTitle,
} from 'reactstrap';
import CountUp from 'react-countup';

const TurnoverChart = () => {
  const series = [
    {
      name: 'Month Turnover',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 80],
    },
    {
      name: 'Month Turnover N-1',
      type: 'column',
      data: [45, 25, 20, 65, 18, 29, 46, 15, 30, 32, 35, 60],
    },
    {
      name: 'Plats',
      type: 'area',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 47],
    },
    {
      name: 'Plats N-1',
      type: 'line',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 50],
    },
  ];

  const options = {
    chart: {
      stacked: !1,
      toolbar: {
        show: !1,
      },
    },
    stroke: {
      width: [1, 1, 4, 4],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
      },
    },
    colors: ['#617cff', '#333f7e', '#40f3b1', '#237457'],

    fill: {
      opacity: [1, 1, 1, 1],
      gradient: {
        inverseColors: !1,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      '01/01/2020',
      '02/01/2020',
      '03/01/2020',
      '04/01/2020',
      '05/01/2020',
      '06/01/2020',
      '07/01/2020',
      '08/01/2020',
      '09/01/2020',
      '10/01/2020',
      '11/01/2020',
      '12/01/2020',
    ],
    markers: {
      size: 0,
    },

    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Points',
      },
    },
    tooltip: {
      shared: !0,
      intersect: !1,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' plats';
          }
          return y;
        },
      },
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  };

  return (
    <React.Fragment>
      <div className="col-md-12">
        <Card>
          <CardBody>
            <div className="float-end">
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret href="#">
                  <span className="fw-semibold">Filter By :</span>{' '}
                  <span className="text-muted">
                    Today<i className="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="#">Yesterday</DropdownItem>
                  <DropdownItem href="#">This Month</DropdownItem>
                  <DropdownItem href="#">This Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <CardTitle className="mb-4 h4">
              <h3>Turnover</h3>
            </CardTitle>
            <div className="mt-1">
              <ul className="list-inline main-chart mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h3 className="text-primary">
                    <span>
                      <CountUp end={2371} separator="," suffix=" €" />
                    </span>
                    <span className="text-muted d-inline-block font-size-15 ms-3">Income</span>
                  </h3>
                </li>{' '}
                <li className="list-inline-item chart-border-left me-0">
                  <h3>
                    <span>
                      <CountUp end={258} />
                    </span>
                    <span className="text-muted d-inline-block font-size-15 ms-3">Sales</span>
                  </h3>
                </li>{' '}
                <li className="list-inline-item chart-border-left me-0">
                  <h3>
                    <span>
                      <CountUp end={3.6} decimals={1} suffix="%" />
                    </span>
                    <span className="text-muted d-inline-block font-size-15 ms-3">Ratio</span>
                  </h3>
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <ReactApexChart options={options} series={series} height="339" type="line" className="apex-charts" />
            </div>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default TurnoverChart;
