import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
//Import Breadcrumb
//import Breadcrumbs from '../../components/Common/Breadcrumb';

const TopStats = () => {
  return (
    <React.Fragment>
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="total-revenue-chart"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Cash</h5>
              <h6>
                <span data-plugin="counterup">270</span> €
              </h6>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Cheque</h5>
              <h6>
                <span data-plugin="counterup">450</span> €
              </h6>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Credit Cart</h5>
              <h6>
                <span data-plugin="counterup">650</span> €
              </h6>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Total</h5>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">1370</span> €
              </h4>
            </div>
            <p className="mt-3 mb-0">
              <span className="text-success me-1">
                {' '}
                <i className="mdi mdi-arrow-up-bold me-1"></i>24.65%
              </span>
              Last 7 days
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="orders-chart"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Income Plats</h5>
              <h5>
                <span data-plugin="counterup">35.27</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Average Income Plats</h5>
              <h5>
                <span data-plugin="counterup">25.55</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Income By Ticket</h5>
              <h5>
                <span data-plugin="counterup">65.75</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Total</h5>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">370</span> €
              </h4>
            </div>

            <p className="text-muted mt-3 mb-0">
              <span className="text-danger me-1">
                <i className="mdi mdi-arrow-down-bold me-1"></i>0.82%
              </span>
              Last 7 days
            </p>
          </div>
        </div>
      </div>

      {/* <div className="table-rep-plugin col-md-6">
        <div className="table-responsive mb-0" data-pattern="priority-columns">
          <Table id="tech-companies-1" className="table table-striped table-bordered">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th data-priority="1">QT</Th>
                <Th data-priority="2">Turnover</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>
                  GOOG <span className="co-name">Google Inc.</span>
                </Th>
                <Td>597.74</Td>
                <Td>12:12PM</Td>
              </Tr>
              <Tr>
                <Th>
                  AAPL <span className="co-name">Apple Inc.</span>
                </Th>
                <Td>378.94</Td>
                <Td>12:22PM</Td>
              </Tr>
              <Tr>
                <Th>
                  AMZN <span className="co-name">Amazon.com Inc.</span>
                </Th>
                <Td>191.55</Td>
                <Td>12:23PM</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div> */}

      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="customers-chart"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Gifts Clients</h5>
              <h5>
                <span data-plugin="counterup">47.86</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Direct Sales</h5>
              <h5>
                <span data-plugin="counterup">158.45</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Tickets Paid</h5>
              <h5>
                <span data-plugin="counterup">457.84</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Total</h5>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">370</span> €
              </h4>
            </div>
            <p className="text-muted mt-3 mb-0">
              <span className="text-danger me-1">
                <i className="mdi mdi-arrow-down-bold me-1"></i>6.24%
              </span>
              Last 7 days
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="growth-chart"></div>
            </div>
            <div className="text-center mt-0">
              <h5>Best Sale</h5>
            </div>

            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Pastille</h5>
              <h5>
                <span data-plugin="counterup">382.41</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Heineken</h5>
              <h5>
                <span data-plugin="counterup">245.23</span> €
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0">Total</h5>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">370</span> €
              </h4>
            </div>
            <p className="text-muted mt-3 mb-0">
              <span className="text-success me-1">
                <i className="mdi mdi-arrow-up-bold me-1"></i>10.51%
              </span>
              Last 7 days
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopStats;
