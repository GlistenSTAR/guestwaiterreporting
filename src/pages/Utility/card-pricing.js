import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

const CardPricing = props => {
  return (
    <React.Fragment>
      <Col xl="4">
        <Card className="pricing-box text-center">
          <CardBody className="p-4">
            <div>

              <div className="mt-3">
                <h5 className="mb-1">{props.pricing.title}</h5>
                <p className="text-muted">{props.pricing.description}</p>
              </div>

              <div className="py-3">
                <i className={"h1 text-primary uil uil-" + props.pricing.icon}></i>
              </div>
            </div>
            <ul className="list-unstyled plan-features mt-3">
              {props.pricing.features.map((feature, key) => (
                <li key={"_feature_" + key}>
                  {feature.title}: <span className="text-primary font-weight-semibold">{feature.value}</span>
                </li>
              ))}
            </ul>

            <div className="py-4">
              <h3><sup><small>$</small></sup> {props.pricing.price}/ <span className="font-size-13 text-muted">{props.pricing.duration}</span></h3>
            </div>

            <div className="text-center plan-btn my-2">
              <Link to="#" className="btn btn-primary waves-effect waves-light">Sign up Now</Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardPricing.propTypes = {
  pricing: PropTypes.object
}

export default CardPricing
