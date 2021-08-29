import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import { Button, Col, Container, Row, Label, Input } from "reactstrap"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { getCustomers } from "../../../store/e-commerce/actions"
import EcommerceCustomerColumns from "./EcommerceCustomerColumns"

const EcommerceCustomers = props => {
  const { customers, onGetCustomers } = props
  const [customerList, setCustomerList] = useState([])
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 15, // replace later with size(customerList),
    custom: true,
    nextPageText: 'Next',
    prePageText: 'Previous',
  }
  const { SearchBar } = Search

  useEffect(() => {
    onGetCustomers()
    setCustomerList(customers)
  }, [onGetCustomers, customers])

  useEffect(() => {
    if (!isEmpty(customers)) {
      setCustomerList(customers)
    }
  }, [customers])

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setCustomerList(
      customers.filter(customer =>
        Object.keys(customer).some(key =>
          customer[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Customers" />
          <Row>
            <Col lg="12">
              <PaginationProvider
                pagination={paginationFactory(pageOptions)}
              >
                {({ paginationProps, paginationTableProps }) => (
                  <ToolkitProvider
                    keyField="id"
                    data={customerList || []}
                    columns={EcommerceCustomerColumns()}
                    bootstrap4
                    search
                  >
                    {toolkitProps => (
                      <React.Fragment>
                        <div>
                          <div>
                            <Button
                              type="button"
                              color="success"
                              className="waves-effect waves-light mb-3"
                            >
                              <i className="mdi mdi-plus me-1"></i>
                                    Add customers
                                  </Button>
                          </div>
                          <Row>
                            <Col sm="12" md="6">
                              <Label>
                                Show{" "}
                                <Input type="select" className="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm d-inline-block" style={{ width: "auto"}}>
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </Input>
                              </Label>
                            </Col>
                            <Col sm="12" md="6">
                              <Label className="float-end">Search: {" "}
                                <SearchBar {...toolkitProps.searchProps} />
                              </Label>
                            </Col>
                          </Row>
                          <div className="table-responsive mb-4">

                            <BootstrapTable
                              responsive
                              remote
                              bordered={false}
                              striped={false}
                              selectRow={{ mode: 'checkbox' }}
                              classes={
                                "table table-centered datatable dt-responsive nowrap table-card-list"
                              }
                              keyField="customerId"
                              headerWrapperClasses={"bg-transparent"}
                              {...toolkitProps.baseProps}
                              onTableChange={handleTableChange}
                              {...paginationTableProps}
                            />
                            <div className="float-end">
                              <PaginationListStandalone
                                {...paginationProps}
                              />
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    )}
                  </ToolkitProvider>
                )}
              </PaginationProvider>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

EcommerceCustomers.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  customers: ecommerce.customers,
})

const mapDispatchToProps = dispatch => ({
  onGetCustomers: () => dispatch(getCustomers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceCustomers)
