import React from 'react';
import { Container, Row, Col, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Breadcrumb
//import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import MainFilter from './MainFilter';
import TopStats from './TopStats';
import ChartDash from './ChartDash';
import Weather from '../Weather/Weather';
//import WeatherGeo from '../Weather/WeatherGeo';
// import MiniWidget from './mini-widget';
// import SalesAnalyticsChart from './salesanalytics-chart';
// import TopProduct from './topselling-product';
// import TopUser from './topuser';
// import RecentActivity from './recent-activity';
// import SocialSource from './socialsource';
// import LatestTransaction from './latest-transaction';

//Import Image
//import setupanalytics from '../../assets/images/setup-analytics-amico.svg';

const series1 = [
  {
    data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54],
  },
];

const options1 = {
  fill: {
    colors: ['#5b73e8'],
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: !1,
    },
    x: {
      show: !1,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: !1,
    },
  },
};

const series2 = [70];

const options2 = {
  fill: {
    colors: ['#34c38f'],
  },
  chart: {
    sparkline: {
      enabled: !0,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: !1,
      },
    },
  },
};

const series3 = [55];

const options3 = {
  fill: {
    colors: ['#5b73e8'],
  },
  chart: {
    sparkline: {
      enabled: !0,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: !1,
      },
    },
  },
};

const series4 = [
  {
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
  },
];

const options4 = {
  fill: {
    colors: ['#f1b44c'],
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: !1,
    },
    x: {
      show: !1,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: !1,
    },
  },
};

const Dashboard = () => {
  const reports = [
    {
      id: 1,
      icon: 'mdi mdi-arrow-up-bold',
      title: 'Total Revenue',
      value: 34152,
      prefix: '$',
      suffix: '',
      badgeValue: '2.65%',
      decimal: 0,
      charttype: 'bar',
      chartheight: 40,
      chartwidth: 70,
      color: 'success',
      desc: 'Dernier 7 jours',
      series: series1,
      options: options1,
    },
    {
      id: 2,
      icon: 'mdi mdi-arrow-down-bold',
      title: 'Orders',
      value: 5643,
      decimal: 0,
      charttype: 'radialBar',
      chartheight: 45,
      chartwidth: 45,
      prefix: '',
      suffix: '',
      badgeValue: '0.82%',
      color: 'danger',
      desc: 'Dernier 7 jours',
      series: series2,
      options: options2,
    },
    {
      id: 3,
      icon: 'mdi mdi-arrow-down-bold',
      title: 'Customers',
      value: 45254,
      decimal: 0,
      prefix: '',
      suffix: '',
      charttype: 'radialBar',
      chartheight: 45,
      chartwidth: 45,
      badgeValue: '6.24%',
      color: 'danger',
      desc: 'Dernier 7 jours',
      series: series3,
      options: options3,
    },
    {
      id: 4,
      icon: 'mdi mdi-arrow-up-bold',
      title: 'Growth',
      value: 12.58,
      decimal: 2,
      prefix: '+',
      suffix: '%',
      charttype: 'bar',
      chartheight: 40,
      chartwidth: 70,
      badgeValue: '10.51%',
      color: 'success',
      desc: 'Dernier 7 jours',
      series: series4,
      options: options4,
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumbs title="Minible" breadcrumbItem="Dashboard" /> */}
          <Row>
            <MainFilter />
          </Row>
          <Row>
            <TopStats />
          </Row>
          <Row>
            <ChartDash />
          </Row>
          <Row>
            <Weather />
          </Row>
          {/* <Row>
            <MiniWidget reports={reports} />
          </Row> 

          <Row>
            <Col xl={8}>
              <SalesAnalyticsChart />
            </Col>
             <Col xl={4}>
              <Card className="bg-primary">
                <CardBody>
                  <Row className="align-items-center">
                    <Col sm={8}>
                      <p className="text-white font-size-18">
                        Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right"></i>
                      </p>
                      <div className="mt-4">
                        <Link to="#" className="btn btn-success waves-effect waves-light">
                          Upgrade Account!
                        </Link>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="mt-4 mt-sm-0">
                        <img src={setupanalytics} className="img-fluid" alt="" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <TopProduct />
            </Col> 
          </Row>
          <Row>
            <Col xl={4}>
              <TopUser />
            </Col>
            <Col xl={4}>
              <RecentActivity />
            </Col>
            <Col xl={4}>
              <SocialSource />
            </Col>
          </Row>  
          <LatestTransaction /> */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
