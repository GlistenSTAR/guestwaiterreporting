import React, { useState, useEffect } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import CountUp from 'react-countup';

//import { Form } from 'react-bootstrap';

// import { useDispatch, useSelector } from 'react-redux';

// import { getRestaurantDetails } from '../../store/actions';

//import restaurantDetailsReducer from '../../store/restaurant/reducer';

const TopStats = (props, match, pk) => {
  // let arr = restaurants.map((rest) => {
  //   return rest.ticket.map((n) => {
  //     return n.montant_ttc;
  //   });
  // });

  // let sum = 0;

  // for (let num of arr) {
  //   sum = sum + num;
  // }

  // console.log(sum);

  // function allSums() {
  //   if (loading) {
  //     <p>Loading...</p>;
  //   }
  //   if (error) {
  //     <p>{error}</p>;
  //   } else {
  //     const sum = sums[0].map((x, idx) =>
  //       sums.reduce((sum, curr) => sum + curr[idx], 0)
  //     );
  //     return sum;
  //   }
  // }
  // console.log(allSums());

  return (
    <React.Fragment>
      <div className="main-restaurant-div"></div>

      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="orders-chart"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Income Plats</h5>
              <h5>
                {/* {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  restaurants.map((rest) => {
                    return rest.ticket.map((n) => {
                      return n.montant_ttc;
                    });
                  })

                  // int = sumsArray[0].map((x, idx) =>
                  //   sumsArray.reduce((sum, curr) => sum + curr[idx], 0)
                  // );
                  // console.log(int);
                )} */}
                <span>
                  {/* {restaurants.map((rest) => {
                    return rest.ticket.map((n) => {
                      return (
                        <CountUp
                          key={n._id}
                          decimals={2}
                          end={n.montant_ttc}
                          suffix=" €"
                        />
                      );
                    });
                  })} */}
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Average Income Plats</h5>
              <h5>
                <span>
                  <CountUp end={70} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Income By Ticket</h5>
              <h5>
                <span>
                  <CountUp end={65} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Total</h5>
              <h4 className="mb-1 mt-1">
                <span>
                  <CountUp end={370} separator="," suffix=" €" />
                </span>
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
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="orders-chart"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Income Plats N-1</h5>
              <h5>
                <span>
                  <CountUp end={25} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Average Income Plats N-1</h5>
              <h5>
                <span>
                  <CountUp end={45} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Income By Ticket N-1</h5>
              <h5>
                <span>
                  <CountUp end={55} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Total N-1</h5>
              <h4 className="mb-1 mt-1">
                <span>
                  <CountUp end={270} separator="," suffix=" €" />
                </span>
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
              <div id="total-revenue-chart"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="text-muted">Cash</h5>
              <h5>
                <span>
                  <CountUp end={270} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="text-muted">Cheque</h5>
              <h5>
                <span>
                  <CountUp end={450} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="text-muted">Credit Cart</h5>
              <h5>
                <span>
                  <CountUp end={650} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Total</h5>
              <h4 className="mb-1 mt-1">
                <span>
                  <CountUp end={1370} separator="," suffix=" €" />
                </span>
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
              <div id="customers-chart"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Gifts Clients</h5>
              <h5>
                <span>
                  <CountUp end={47.4} separator="," suffix=" €" />
                </span>{' '}
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Direct Sales</h5>
              <h5>
                <span>
                  <CountUp end={158} separator="," suffix=" €" />
                </span>
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Tickets Paid</h5>
              <h5>
                <span>
                  <CountUp end={457} separator="," suffix=" €" />
                </span>{' '}
              </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 text-muted">Total</h5>
              <h4 className="mb-1 mt-1">
                <span>
                  <CountUp end={1370} separator="," suffix=" €" />
                </span>
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

      {/* <div className="col-md-6 col-xl-3">
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
      </div> */}
    </React.Fragment>
  );
};

export default TopStats;
