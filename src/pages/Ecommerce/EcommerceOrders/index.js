import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { isEmpty } from "lodash"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from "react-bootstrap-table2-toolkit"

import { Button, Card, CardBody, Col, Container, Label, Row ,Form ,Input} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { getOrders } from "../../../store/actions"
import EcommerceOrderColumns from "./EcommerceOrderColumns"
import EcommerceOrdersModal from "./EcommerceOrdersModal"

const EcommerceOrders = props => {
  const { orders, onGetOrders } = props
  const [modal, setModal] = useState(false)
  const [orderList, setOrderList] = useState([])
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 50, // replace later with size(orders),
    custom: true,
  }

  useEffect(() => {
    onGetOrders()
    setOrderList(orders)
  }, [onGetOrders, orders])

  useEffect(() => {
    if (!isEmpty(orders)) setOrderList(orders)
  }, [orders])

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setOrderList(
      orders.filter(order =>
        Object.keys(order).some(
          key =>
            typeof order[key] === "string" &&
            order[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    )
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <React.Fragment>
      <EcommerceOrdersModal isOpen={modal} toggle={toggleModal} />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Orders" />
          <Row>
            <Col xs="12">
              <Card>
                {!isEmpty(orderList) && (
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={orderList || []}
                          columns={EcommerceOrderColumns(toggleModal)}
                          bootstrap4
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row>
                                <Col lg="12">
                                  <div>
                                    <div className="float-end">
                                      <Form className="d-inline-flex mb-3">
                                        <Label className="form-check-label my-2 me-2" htmlFor="order-selectinput">Orders</Label>
                                        <Input type="select" className="form-select" id="order-selectinput">
                                          <option>All</option>
                                          <option value="1">Active</option>
                                          <option value="2">Unpaid</option>
                                        </Input>
                                      </Form>

                                    </div>
                                    <Button
                                      type="button"
                                      color="success"
                                      className="waves-effect waves-light mb-3"
                                    >
                                      <i className="mdi mdi-plus me-1"></i>
                                      Add New Order
                                    </Button>
                                  </div>
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      responsive
                                      remote
                                      bordered={false}
                                      striped={false}
                                      classes={
                                        "table-centered datatable dt-responsive nowrap table-card-list"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      onTableChange={handleTableChange}
                                      {...paginationTableProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

EcommerceOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
}

const mapStateToProps = state => ({
  orders: state.ecommerce.orders,
})

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getOrders()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceOrders))
