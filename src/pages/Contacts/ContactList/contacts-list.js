import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter , Link } from "react-router-dom"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import { getUsers } from "../../../store/contacts/actions"
import contactListColumns from "./contactListColumns"
import { isEmpty } from "lodash"

const ContactsList = props => {
  const { users, onGetUsers } = props
  const [userList, setUserList] = useState([])
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 30, // replace later with size(users),
    custom: true,
  }
  const { SearchBar } = Search

  useEffect(() => {
    onGetUsers()
    setUserList(users)
  }, [users, onGetUsers])

  useEffect(() => {
    if (!isEmpty(users)) {
      setUserList(users)
    }
  }, [users])

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setUserList(
      users.filter(user =>
        Object.keys(user).some(
          key =>
            typeof user[key] === "string" &&
            user[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    )
  }

  var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={userList || []}
                        columns={contactListColumns()}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="row mb-2">
                              <Col md={6}>
                                <div className="mb-3">
                                  <Link to="#" className="btn btn-success waves-effect waves-light"><i className="mdi mdi-plus me-2"></i> Add New</Link>
                                </div>
                              </Col>

                              <Col md={6}>
                                <div className="form-inline float-md-end mb-3">
                                  <div className="search-box ms-2">
                                    <div className="position-relative">
                                      <SearchBar {...toolkitProps.searchProps} />
                                      <i className="mdi mdi-magnify search-icon"></i>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive mb-4">
                                  <BootstrapTable
                                  selectRow={selectRowProp}
                                    responsive
                                    remote
                                    bordered={false}
                                    striped={false}
                                    classes={
                                      "table table-centered table-nowrap mb-0"
                                    }
                                    {...toolkitProps.baseProps}
                                    onTableChange={handleTableChange}
                                    {...paginationTableProps}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <div className="float-sm-end">
                              <PaginationListStandalone
                                {...paginationProps}
                              />
                            </div>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ContactsList.propTypes = {
  users: PropTypes.array,
  onGetUsers: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  users: contacts.users,
})

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsList))
