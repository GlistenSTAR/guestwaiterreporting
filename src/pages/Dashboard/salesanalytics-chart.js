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

const SalesAnalyticsChart = () => {
  const series = [
    {
      name: 'Mois',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: 'Serveur',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: 'Plats',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
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
      width: [0, 2, 4],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
      },
    },
    colors: ['#5b73e8', '#dfe2e6', '#f1b44c'],

    fill: {
      opacity: [0.85, 0.25, 1],
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
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003',
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
            return y.toFixed(0) + ' points';
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
      <Card>
        <CardBody>
          <div className="float-end">
            <UncontrolledDropdown>
              <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret href="#">
                <span className="fw-semibold">Filtere Par :</span>{' '}
                <span className="text-muted">
                  Aujourd'hui<i className="mdi mdi-chevron-down ms-1"></i>
                </span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href="#">Hier</DropdownItem>
                <DropdownItem href="#">Ce Mois</DropdownItem>
                <DropdownItem href="#">Année En Cours</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <CardTitle className="mb-4 h4">Chiffre d'Affaire</CardTitle>
          <div className="mt-1">
            <ul className="list-inline main-chart mb-0">
              <li className="list-inline-item chart-border-left me-0 border-0">
                <h3 className="text-primary">
                  <span>
                    <CountUp end={2371} separator="," prefix="$" />
                  </span>
                  <span className="text-muted d-inline-block font-size-15 ms-3">Revenue</span>
                </h3>
              </li>{' '}
              <li className="list-inline-item chart-border-left me-0">
                <h3>
                  <span data-plugin="counterup">
                    <CountUp end={258} />
                  </span>
                  <span className="text-muted d-inline-block font-size-15 ms-3">Ventes</span>
                </h3>
              </li>{' '}
              <li className="list-inline-item chart-border-left me-0">
                <h3>
                  <span data-plugin="counterup">
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
    </React.Fragment>
  );
};

export default SalesAnalyticsChart;
