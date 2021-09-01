import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';

const WaitersFilter = () => {
  return (
    <Col lg={12}>
      <Card>
        <CardBody className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              All Waiters
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Kim
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Sam
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              value="option4"
            />
            <label className="form-check-label" htmlFor="inlineRadio4">
              Chris
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio5"
              value="option5"
            />
            <label className="form-check-label" htmlFor="inlineRadio5">
              John
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio6"
              value="option6"
            />
            <label className="form-check-label" htmlFor="inlineRadio6">
              Brad
            </label>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WaitersFilter;
