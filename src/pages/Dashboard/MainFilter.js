import React from 'react';

const MainFilter = () => {
  return (
    <React.Fragment>
      <div className="col-xl-6">
        <div className="card custom_height">
          <div className="card-body">
            <div className="d-flex justify-content-center align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-outline-success waves-effect waves-light active">
                  Today
                </button>
                <button type="button" className="btn btn-outline-success waves-effect waves-light">
                  Yesterday
                </button>
                <button type="button" className="btn btn-outline-success waves-effect waves-light">
                  This Month
                </button>
                <button type="button" className="btn btn-outline-success waves-effect waves-light">
                  This year
                </button>
                <button type="button" className="btn btn-outline-success waves-effect waves-light">
                  Last year
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card custom_height">
          <div className="card-body">
            <div className="btn-group d-flex justify-content-around btn_width">
              <button type="button" className="btn btn-outline-success waves-effect waves-light">
                Start Date <i className="uil-calendar-alt"></i>
              </button>
              <button type="button" className="btn btn-outline-success waves-effect waves-light">
                End Date <i className="uil-calendar-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainFilter;
