import React from "react"
import { Card, CardBody, DropdownToggle, DropdownMenu, DropdownItem, Table, UncontrolledDropdown } from "reactstrap"

import FeatherIcon from "feather-icons-react"
//Simple bar
import SimpleBar from "simplebar-react"

//Import Image
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"
import avatar7 from "../../assets/images/users/avatar-7.jpg"
import avatar8 from "../../assets/images/users/avatar-8.jpg"

const TopUser = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="float-end">
                        <UncontrolledDropdown>
                            <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret>
                                <span className="text-muted">All Members<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem href="#">Locations</DropdownItem>
                                <DropdownItem href="#">Revenue</DropdownItem>
                                <DropdownItem href="#">Join Date</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <h4 className="card-title mb-4">Top Users</h4>
                    <SimpleBar style={{ maxHeight: "336px" }}>
                        <div className="table-responsive">
                            <Table className="table-borderless table-centered table-nowrap">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> Nevada</p>
                                        </td>
                                        <td><span className="badge bg-soft-danger font-size-12">Cancel</span></td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />$250.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar5} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Lolita Hamill</h6>
                                            <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Texas</p>
                                        </td>
                                        <td><span className="badge bg-soft-success font-size-12">Success</span></td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-down" className="icon-xs icon me-2 text-danger" />$110.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar6} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Robert Mercer</h6>
                                            <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> California</p>
                                        </td>
                                        <td><span className="badge bg-soft-info font-size-12">Active</span></td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />$420.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar7} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                                            <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Montana</p>
                                        </td>
                                        <td><span className="badge bg-soft-warning font-size-12">Pending</span></td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-down" className="icon-xs icon me-2 text-danger" />$120.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar8} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                                            <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Colorado</p>
                                        </td>
                                        <td><span className="badge bg-soft-info font-size-12">Active</span></td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />$112.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar2} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                                            <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> Australia</p>
                                        </td>
                                        <td><span className="badge bg-soft-success font-size-12">Success</span></td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-down" className="icon-xs icon me-2 text-danger" />$120.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar1} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                                            <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i> India</p>
                                        </td>
                                        <td><span className="badge bg-soft-danger font-size-12">Cancel</span></td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />$112.00
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </SimpleBar>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TopUser