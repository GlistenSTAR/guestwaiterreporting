import React, { useEffect, useState } from "react"
import { Col, Container, Row , Button} from "reactstrap"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { isEmpty } from "lodash"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Card invoice
import { getInvoices } from "../../store/actions"
import InvoiceColumns from "./InvoiceColumns"

const InvoicesList = props => {
  const [modal, setModal] = useState(false)
  const { invoices, onGetInvoices } = props
  const [invoiceList, setInvoiceList] = useState([])
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 50, // replace later with size(Invoice),
    custom: true,
  }

  useEffect(() => {
    onGetInvoices()
    setInvoiceList(invoices)
  }, [onGetInvoices, invoices])

  useEffect(() => {
    if (!isEmpty(invoices)) setInvoiceList(invoices)
  }, [invoices])

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setInvoiceList(
      invoices.filter(invoice =>
        Object.keys(invoice).some(
          key =>
            typeof invoice[key] === "string" &&
            invoice[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    )
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Invoices" breadcrumbItem="Invoice List" />

          {!isEmpty(invoiceList) && (

            <PaginationProvider
              pagination={paginationFactory(pageOptions)}
            >
              {({ paginationProps, paginationTableProps }) => (
                <ToolkitProvider
                  keyField="id"
                  data={invoiceList || []}
                  columns={InvoiceColumns(toggleModal)}
                  bootstrap4
                  search
                >
                  {toolkitProps => (
                    <React.Fragment>
                      <Row>
                        <Col md="4">
                          <div>
                            <Button
                              type="button"
                              color="success"
                              className="btn btn-success waves-effect waves-light mb-3"
                            >
                              <i className="mdi mdi-plus me-1"></i>
                                      Add Invoice
                                    </Button>
                          </div>
                        </Col>
                        <Col md={8}>
                          <div className="float-end">
                            <div className=" mb-3">
                              <div className="input-daterange input-group" id="datepicker6" data-date-format="dd M, yyyy" data-date-autoclose="true" data-provide="datepicker" data-date-container='#datepicker6'>
                                <input type="text" className="form-control text-start" placeholder="From" name="From" />
                                <input type="text" className="form-control text-start" placeholder="To" name="To" />

                                <button type="button" className="btn btn-primary"><i className="mdi mdi-filter-variant"></i></button>
                              </div>
                            </div>

                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12}>
                          <div className="table-responsive">
                            <BootstrapTable
                              responsive
                              remote
                              bordered={false}
                              striped={false}
                              classes={
                                "table table-centered datatable dt-responsive nowrap table-card-list"
                              }
                              headerWrapperClasses={"bg-transparent"}
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

          )}

        </Container>
      </div>
    </React.Fragment>
  )
}

InvoicesList.propTypes = {
  invoices: PropTypes.array,
  onGetInvoices: PropTypes.func,
}

const mapStateToProps = ({ invoices }) => ({
  invoices: invoices.invoices,
})

const mapDispatchToProps = dispatch => ({
  onGetInvoices: () => dispatch(getInvoices()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InvoicesList))
