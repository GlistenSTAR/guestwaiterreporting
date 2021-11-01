import React from 'react';
import { InputGroup } from 'reactstrap';
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';

const MainFilter = () => {
  return (
    <React.Fragment>
      <div className="col-xl-6">
        <div className="card custom_height">
          <div className="card-body">
            <div className="d-flex justify-content-center align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="custom-btn btn waves-effect waves-light active"
                >
                  Today
                </button>
                <button
                  type="button"
                  className="custom-btn btn waves-effect waves-light"
                >
                  Yesterday
                </button>
                <button
                  type="button"
                  className="custom-btn btn waves-effect waves-light"
                >
                  This Month
                </button>
                <button
                  type="button"
                  className="custom-btn btn waves-effect waves-light"
                >
                  This year
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card custom_height">
          <div className="card-body">
            <div className="d-flex justify-content-center calendar-block">
              <i className="uil-calendar-alt mt-1"></i>
              <InputGroup className="date_picker">
                <Flatpickr
                  className="form-control d-block"
                  placeholder="JJ M AAAA"
                  options={{
                    mode: 'range',
                    dateFormat: 'd-m-Y',
                  }}
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainFilter;
