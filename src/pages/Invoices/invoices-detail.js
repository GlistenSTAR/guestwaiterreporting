import React, { useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap"
import { isEmpty, map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Image
import logo from "../../assets/images/logo-dark.png"
import PropTypes from "prop-types"
import { getInvoiceDetail } from "../../store/invoices/actions"
import { connect } from "react-redux"

const InvoiceDetail = props => {
  const {
    invoiceDetail,
    match: { params },
    onGetInvoiceDetail,
  } = props

  useEffect(() => {
    if (params && params.id) {
      onGetInvoiceDetail(params.id)
    } else {
      onGetInvoiceDetail(1) //remove this after full integration
    }
  }, [params, onGetInvoiceDetail])

  //Print the Invoice
  const printInvoice = () => {
    window.print()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Invoices" breadcrumbItem="Invoice Detail" />
          {!isEmpty(invoiceDetail) && (
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <div className="invoice-title">
                      <h4 className="float-end font-size-16">
                      Invoice # {invoiceDetail.invoiceID}
                        <span className="badge bg-success font-size-12 ms-2">Paid</span>
                      </h4>
                      <div className="mb-4">
                        <img src={logo} alt="logo" height="20" />
                      </div>
                      <div className="text-muted">
                        <p className="mb-1">{invoiceDetail.shippingAddress}</p>
                        <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i> {invoiceDetail.shippingEmail}</p>
                        <p><i className="uil uil-phone me-1"></i> {invoiceDetail.shippingPhoneno}</p>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <Row>
                      <Col sm="6">
                        <div className="text-muted">
                          <h5 className="font-size-16 mb-3">Billed To:</h5>
                          <h5 className="font-size-15 mb-2">{invoiceDetail.billingName}</h5>
                          <p className="mb-1">{invoiceDetail.billingAddress}</p>
                          <p className="mb-1">{invoiceDetail.billingEmail}</p>
                          <p>{invoiceDetail.billingPhoneno}</p>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="text-muted text-sm-end">
                          <div>
                            <h5 className="font-size-16 mb-1">Invoice No:</h5>
                            <p>#{invoiceDetail.invoiceID}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-16 mb-1">Invoice Date:</h5>
                            <p>{invoiceDetail.date}</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-16 mb-1">Order No:</h5>
                            <p>#{invoiceDetail.orderId}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="py-2">
                      <h5 className="font-size-15">Order summary</h5>
                      <div className="table-responsive">
                        <Table className="table-nowrap table-centered mb-0">
                          <thead>
                            <tr>
                              <th style={{ width: "70px" }}>No.</th>
                              <th>Item</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th className="text-end" style={{ width: "120px" }}>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {map(
                              invoiceDetail.orderSummary.items,
                              (item, key) => (
                                <tr key={key}>
                                  <td>{item.id}</td>
                                  <td>
                                    <h5 className="font-size-15 mb-1">{item.item}</h5>
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">Color : <span className="fw-medium">{item.color}</span></li>{" "}
                                      <li className="list-inline-item">Size : <span className="fw-medium">{item.size}</span></li>
                                    </ul>
                                  </td>
                                  <td>{item.price}</td>
                                  <td>{item.quantity}</td>
                                  <td className="text-end">{item.price}</td>
                                </tr>
                              )
                            )}
                            <tr>
                              <th colSpan="4" className="text-end">Sub Total</th>
                              <td className="text-end">{invoiceDetail.orderSummary.subTotal}</td>
                            </tr>
                            <tr>
                              <th colSpan="4" className="border-0 text-end">
                                Discount :</th>
                              <td className="border-0 text-end">- {invoiceDetail.orderSummary.discount}</td>
                            </tr>
                            <tr>
                              <th colSpan="4" className="border-0 text-end">
                                Shipping Charge :</th>
                              <td className="border-0 text-end">{invoiceDetail.orderSummary.shipping}</td>
                            </tr>
                            <tr>
                              <th colSpan="4" className="border-0 text-end">
                                Tax</th>
                              <td className="border-0 text-end">{invoiceDetail.orderSummary.tax}</td>
                            </tr>
                            <tr>
                              <th colSpan="4" className="border-0 text-end">Total</th>
                              <td className="border-0 text-end"><h4 className="m-0">{invoiceDetail.orderSummary.total}</h4></td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <div className="d-print-none mt-4">
                        <div className="float-end">
                          <Link to="#" onClick={printInvoice} className="btn btn-success waves-effect waves-light me-1"><i className="fa fa-print"></i></Link>{" "}
                          <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Send</Link>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

InvoiceDetail.propTypes = {
  invoiceDetail: PropTypes.object,
  onGetInvoiceDetail: PropTypes.func,
}

const mapStateToProps = ({ invoices }) => ({
  invoiceDetail: invoices.invoiceDetail,
})

const mapDispatchToProps = dispatch => ({
  onGetInvoiceDetail: id => dispatch(getInvoiceDetail(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InvoiceDetail))
