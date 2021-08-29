import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { map } from "lodash"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import classnames from 'classnames';

import Reviews from "./Reviews"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

// import charts
import { getUserProfile } from "../../../store/actions"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import projectColumns from "./projectColumns"
import SimpleBar from "simplebar-react"

const ContactsProfile = props => {
  const { userProfile, onGetUserProfile } = props
  // eslint-disable-next-line no-unused-vars
  const [miniCards, setMiniCards] = useState([
    {
      title: "Completed Projects",
      iconClass: "bx-check-circle",
      text: "125",
    },
    { title: "Pending Projects", iconClass: "bx-hourglass", text: "12" },
    { title: "Total Revenue", iconClass: "bx-package", text: "$36,524" },
  ])

  const [activeTab, setActiveTab] = useState('1');

  const profiletoggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
    onGetUserProfile()
  }, [onGetUserProfile])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Profile" />

          <Row>
            <Col xl="4">
              <Card className="card h-100">
                <CardBody>
                  <div className="text-center">
                    <UncontrolledDropdown className="float-end">
                      <DropdownToggle tag="a" className="text-body font-size-16" caret>
                        <i className="uil uil-ellipsis-h"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">Edit</DropdownItem>
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Remove</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="clearfix"></div>
                    <div>
                      <img
                        src={userProfile.img}
                        alt=""
                        className="avatar-lg rounded-circle img-thumbnail"
                      />
                    </div>
                    <h5 className="mt-3 mb-1">{userProfile.name}</h5>
                    <p className="text-muted">{userProfile.designation}</p>

                    <div className="mt-4">
                      <button type="button" className="btn btn-light btn-sm"><i className="uil uil-envelope-alt me-2"></i> Message</button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="text-muted">
                    <h5 className="font-size-16">About</h5>
                    <p>Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
                    <div className="table-responsive mt-4">
                      <div>
                        <p className="mb-1">Name :</p>
                        <h5 className="font-size-16">Marcus</h5>
                      </div>
                      <div className="mt-4">
                        <p className="mb-1">Mobile :</p>
                        <h5 className="font-size-16">012-234-5678</h5>
                      </div>
                      <div className="mt-4">
                        <p className="mb-1">E-mail :</p>
                        <h5 className="font-size-16">marcus@minible.com</h5>
                      </div>
                      <div className="mt-4">
                        <p className="mb-1">Location :</p>
                        <h5 className="font-size-16">California, United States</h5>
                      </div>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="8">
              <Card className="mb-0">
                <Nav tabs className="nav-tabs-custom nav-justified">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { profiletoggle('1'); }}
                    >
                      <i className="uil uil-user-circle font-size-20"></i>
                      <span className="d-none d-sm-block">About</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { profiletoggle('2'); }}
                    >
                      <i className="uil uil-clipboard-notes font-size-20"></i>
                      <span className="d-none d-sm-block">Tasks</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => { profiletoggle('3'); }}
                    >
                      <i className="uil uil-envelope-alt font-size-20"></i>
                      <span className="d-none d-sm-block">Messages</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="p-4">
                  <TabPane tabId="1">
                    <div>
                      <div>
                        <h5 className="font-size-16 mb-4">Experience</h5>

                        <ul className="activity-feed mb-0 ps-2">
                          {map(userProfile.experiences, (experience, i) => (
                            <li className="feed-item" key={"_exp_" + i}>
                              <div className="feed-item-list">
                                <p className="text-muted mb-1">{experience.timeDuration}</p>
                                <h5 className="font-size-16">{experience.designation}</h5>
                                <p>{experience.company}</p>
                                <p className="text-muted">{experience.description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-size-16 mb-4">Projects</h5>

                        <ToolkitProvider
                          keyField="id"
                          data={userProfile.projects || []}
                          columns={projectColumns()}
                          bootstrap4
                        >
                          {toolkitProps => (
                            <React.Fragment>

                              <div className="table-responsive">
                                <BootstrapTable
                                  responsive
                                  remote
                                  bordered={false}
                                  striped={false}
                                  classes={
                                    "table table-nowrap table-hover mb-0"
                                  }
                                  {...toolkitProps.baseProps}
                                />
                              </div>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div>
                      <h5 className="font-size-16 mb-3">Active</h5>

                      <div className="table-responsive">
                        <table className="table table-nowrap table-centered">
                          <tbody>
                            <tr>
                              <td style={{ width: '60px' }}>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-activeCheck2" />
                                  <label className="form-check-label" htmlFor="tasks-activeCheck2"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">Ecommerce Product Detail</Link>
                              </td>

                              <td>27 May, 2020</td>
                              <td style={{ width: '160px' }}><span className="badge bg-soft-primary font-size-12">Active</span></td>

                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-activeCheck1" />
                                  <label className="form-check-label" htmlFor="tasks-activeCheck1"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">Ecommerce Product</Link>
                              </td>

                              <td>26 May, 2020</td>
                              <td><span className="badge bg-soft-primary font-size-12">Active</span></td>

                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h5 className="font-size-16 my-3">Upcoming</h5>

                      <div className="table-responsive">
                        <table className="table table-nowrap table-centered">
                          <tbody>
                            <tr>
                              <td style={{ width: '60px' }}>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck3" />
                                  <label className="form-check-label" htmlFor="tasks-upcomingCheck3"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">Chat app Page</Link>
                              </td>

                              <td>-</td>
                              <td style={{ width: '160px' }}><span className="badge bg-soft-secondary font-size-12">Waiting</span></td>

                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck2" />
                                  <label className="form-check-label" htmlFor="tasks-upcomingCheck2"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">Email Pages</Link>
                              </td>

                              <td>04 June, 2020</td>
                              <td><span className="badge bg-soft-primary font-size-12">Approved</span></td>

                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck1" />
                                  <label className="form-check-label" htmlFor="tasks-upcomingCheck1"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">Contacts Profile Page</Link>
                              </td>

                              <td>-</td>
                              <td><span className="badge bg-soft-secondary font-size-12">Waiting</span></td>

                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h5 className="font-size-16 my-3">Complete</h5>

                      <div className="table-responsive">
                        <table className="table table-nowrap table-centered">
                          <tbody>
                            <tr>
                              <td style={{ width: '60px' }}>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-completeCheck3" />
                                  <label className="form-check-label" htmlFor="tasks-completeCheck3"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">UI Elements</Link>
                              </td>

                              <td>27 May, 2020</td>
                              <td style={{ width: '160px' }}><span className="badge bg-soft-success font-size-12">Complete</span></td>

                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-completeCheck2" />
                                  <label className="form-check-label" htmlFor="tasks-completeCheck2"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">Authentication Pages</Link>
                              </td>

                              <td>27 May, 2020</td>
                              <td><span className="badge bg-soft-success font-size-12">Complete</span></td>

                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-completeCheck1" />
                                  <label className="form-check-label" htmlFor="tasks-completeCheck1"></label>
                                </div>
                              </td>
                              <td>
                                <Link to="#" className="fw-bold text-dark">Admin Layout</Link>
                              </td>

                              <td>26 May, 2020</td>
                              <td><span className="badge bg-soft-success font-size-12">Complete</span></td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div>
                      <SimpleBar style={{maxHeight: '430px'}}>
                        <Reviews comments={userProfile.userComments} />
                      </SimpleBar>

                      <div className="border rounded mt-4">
                        <form action="#">
                          <div className="px-2 py-1 bg-light">

                            <div className="btn-group" role="group">
                              <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="uil uil-link"></i></button>
                              <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="uil uil-smile"></i></button>
                              <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="uil uil-at"></i></button>
                            </div>

                          </div>
                          <textarea rows="3" className="form-control border-0 resize-none" placeholder="Your Message..."></textarea>

                        </form>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ContactsProfile.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
})

const mapDispatchToProps = dispatch => ({
  onGetUserProfile: () => dispatch(getUserProfile()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsProfile))
