import React from "react"
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

const SocialSource = () => {
    return (
        <Card>
            <CardBody>
                <div className="float-end">
                    <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret>
                            <span className="text-muted">Monthly<i className="mdi mdi-chevron-down ms-1"></i></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem href="#">Yearly</DropdownItem>
                            <DropdownItem href="#">Monthly</DropdownItem>
                            <DropdownItem href="#">Weekly</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>

                <h4 className="card-title">Social Source</h4>

                <div className="text-center">
                    <div className="avatar-sm mx-auto mb-4">
                        <span className="avatar-title rounded-circle bg-soft-primary font-size-24">
                            <i className="mdi mdi-facebook text-primary"></i>
                        </span>
                    </div>
                    <p className="font-16 text-muted mb-2"></p>
                    <h5><Link to="#" className="text-dark">Facebook - <span className="text-muted font-16">125 sales</span> </Link></h5>
                    <p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                    <Link to="#" className="text-reset font-16">Learn more <i className="mdi mdi-chevron-right"></i></Link>
                </div>
                <Row className="mt-4">
                    <Col className="col-4">
                        <div className="social-source text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                                <span className="avatar-title rounded-circle bg-primary font-size-16">
                                    <i className="mdi mdi-facebook text-white"></i>
                                </span>
                            </div>
                            <h5 className="font-size-15">Facebook</h5>
                            <p className="text-muted mb-0">125 sales</p>
                        </div>
                    </Col>
                    <Col className="col-4">
                        <div className="social-source text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                                <span className="avatar-title rounded-circle bg-info font-size-16">
                                    <i className="mdi mdi-twitter text-white"></i>
                                </span>
                            </div>
                            <h5 className="font-size-15">Twitter</h5>
                            <p className="text-muted mb-0">112 sales</p>
                        </div>
                    </Col>
                    <Col className="col-4">
                        <div className="social-source text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                                <span className="avatar-title rounded-circle bg-pink font-size-16">
                                    <i className="mdi mdi-instagram text-white"></i>
                                </span>
                            </div>
                            <h5 className="font-size-15">Instagram</h5>
                            <p className="text-muted mb-0">104 sales</p>
                        </div>
                    </Col>
                </Row>

                <div className="mt-3 text-center">
                    <Link to="#" className="text-primary font-size-14 fw-medium">View All Sources <i className="mdi mdi-chevron-right"></i></Link>
                </div>

            </CardBody>
        </Card>
    )
}

export default SocialSource