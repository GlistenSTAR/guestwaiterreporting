import React from "react"
import { Card, CardBody, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap"
import SimpleBar from "simplebar-react"

const RecentActivity = () => {
    return (
        <Card>
            <CardBody>
                <div className="float-end">
                    <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret>
                            <span className="text-muted">Recent<i className="mdi mdi-chevron-down ms-1"></i></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem href="#">Recent</DropdownItem>
                            <DropdownItem href="#">By Users</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>

                <h4 className="card-title mb-4">Recent Activity</h4>

                <SimpleBar className="activity-feed mb-0 ps-2" style={{ maxHeight: '336px' }}>
                    <li className="feed-item">
                        <div className="feed-item-list">
                            <p className="text-muted mb-1 font-size-13">Today<small className="d-inline-block ms-1">12:20 pm</small></p>
                            <p className="mt-0 mb-0">Andrei Coman magna sed porta finibus, risus posted a new article: <span className="text-primary">Forget UX Rowland</span></p>
                        </div>
                    </li>
                    <li className="feed-item">
                        <p className="text-muted mb-1 font-size-13">22 Jul, 2020 <small className="d-inline-block ms-1">12:36 pm</small></p>
                        <p className="mt-0 mb-0">Andrei Coman posted a new article: <span
                            className="text-primary">Designer Alex</span></p>
                    </li>
                    <li className="feed-item">
                        <p className="text-muted mb-1 font-size-13">18 Jul, 2020 <small className="d-inline-block ms-1">07:56 am</small></p>
                        <p className="mt-0 mb-0">Zack Wetass, sed porta finibus, risus Chris Wallace
                                                    Commented <span className="text-primary"> Developer Moreno</span></p>
                    </li>
                    <li className="feed-item">
                        <p className="text-muted mb-1 font-size-13">10 Jul, 2020 <small className="d-inline-block ms-1">08:42 pm</small></p>
                        <p className="mt-0 mb-0">Zack Wetass, Chris combined Commented <span
                            className="text-primary">UX Murphy</span></p>
                    </li>

                    <li className="feed-item">
                        <p className="text-muted mb-1 font-size-13">23 Jun, 2020 <small className="d-inline-block ms-1">12:22 am</small></p>
                        <p className="mt-0 mb-0">Zack Wetass, sed porta finibus, risus Chris Wallace
                                                    Commented <span className="text-primary"> Developer Moreno</span></p>
                    </li>
                    <li className="feed-item pb-1">
                        <p className="text-muted mb-1 font-size-13">20 Jun, 2020 <small className="d-inline-block ms-1">09:48 pm</small></p>
                        <p className="mt-0 mb-0">Zack Wetass, Chris combined Commented <span
                            className="text-primary">UX Murphy</span></p>
                    </li>

                </SimpleBar>

            </CardBody>
        </Card>
    )
}

export default RecentActivity