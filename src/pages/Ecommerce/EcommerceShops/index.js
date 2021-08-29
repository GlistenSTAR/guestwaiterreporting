import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//Import Card
import CardShop from "./CardShop"
import { getShops } from "../../../store/e-commerce/actions"

const EcommerceShops = props => {
  const { shops, onGetShops } = props

  useEffect(() => {
    onGetShops()
  }, [onGetShops])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Shops" />
          <Row className="mb-2">
            <Col md={6}>
              <div className="mb-3">
                <Link to="#" className="btn btn-success waves-effect waves-light"><i className="mdi mdi-plus me-2"></i> Add New</Link>
              </div>
            </Col>

            <Col md={6}>
              <div className="form-inline float-md-end mb-3">
                <div className="search-box ml-2">
                  <div className="position-relative">
                    <input type="text" className="form-control rounded border-0" placeholder="Search..." />
                    <i className="mdi mdi-magnify search-icon"></i>
                  </div>
                </div>

              </div>
              </Col>

          </Row>
          <Row>
            {map(shops, (shop, key) => (
              <CardShop shop={shop} key={"_shop_" + key} />
            ))}
          </Row>
          <Row>
            <Col xs="12">
              <div className="text-center my-3">
              <Link to="#" className="text-primary"><i className="mdi mdi-loading mdi-spin font-size-20 align-middle me-2"></i> Load more </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

EcommerceShops.propTypes = {
  shops: PropTypes.array,
  onGetShops: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  shops: ecommerce.shops,
})

const mapDispatchToProps = dispatch => ({
  onGetShops: () => dispatch(getShops()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceShops)
