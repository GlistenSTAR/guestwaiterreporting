import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';

const FilterControl = () => {
  return (
    <Col lg={12}>
      <Card>
        <CardBody>
          <div className="btn-group d-flex filter-control justify-content-around align-items-center">
            <button type="button" className="btn btn-outline-success waves-effect waves-light">
              27/10/2020 <i className="uil-calendar-alt"></i>
            </button>
            <h4 className="mb-0">45,456.58 €</h4>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FilterControl;
