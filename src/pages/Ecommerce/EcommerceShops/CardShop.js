import PropTypes from 'prop-types'
import React from "react"
import { Card, Col, Row ,CardBody ,Media} from "reactstrap"
import { Link } from "react-router-dom"

const CardShop = props => {
  const { shop } = props
  const name = shop.name
  const nameIcon = name.charAt(0)
  return (
    <React.Fragment>
      <Col xl="4" sm="6">
        <Card>
          <CardBody>
            <Media className="d-flex">
              <div className="avatar-sm me-4">
                <span
                      className={
                        "avatar-title rounded-circle bg-soft-" +
                        shop.color +
                        " primary text-" +
                        shop.color +
                        " font-size-16"
                      }
                    >
                      {nameIcon}
                    </span>
              </div>
              <Media body className="flex-1 align-self-center">
              <div className="border-bottom pb-1">
                <h5 className="text-truncate font-size-16 mb-1"><Link to="#" className="text-dark">{shop.name}</Link></h5>
                <p className="text-muted">
                  <i className="mdi mdi-account me-1"></i> {shop.subtitle}
                </p>
              </div>
              <Row>
                <div className="col-6">
                  <div className="mt-3">
                    <p className="text-muted mb-2">Products</p>
                    <h5 className="font-size-16 mb-0">{shop.product}</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mt-3">
                    <p className="text-muted mb-2">Wallet Balance</p>
                    <h5 className="font-size-16 mb-0">${shop.balance}</h5>
                  </div>
                </div>
              </Row>
              </Media>
            </Media>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardShop.propTypes = {
  shop: PropTypes.object
}

export default CardShop
