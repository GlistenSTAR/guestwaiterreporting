import React from "react"
import { Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Progress } from "reactstrap"

const TopProduct = () => {

    const progressbars = [
        {
            id: 1,
            title: 'Desktops',
            value: 52,
            color: 'primary'
        },
        {
            id: 2,
            title: 'iPhones',
            value: 45,
            color: 'info'
        },
        {
            id: 3,
            title: 'Android',
            value: 48,
            color: 'success'
        },
        {
            id: 4,
            title: 'Tablets',
            value: 78,
            color: 'warning'
        },
        {
            id: 5,
            title: 'Cables',
            value: 63,
            color: 'purple'
        },
    ]

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="float-end">
                        <UncontrolledDropdown>
                            <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret href="#">
                                <span className="fw-semibold">Sort By:</span> <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem href="#">Monthly</DropdownItem>
                                <DropdownItem href="#">Yearly</DropdownItem>
                                <DropdownItem href="#">Weekly</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <h4 className="card-title mb-4">Top Selling Products</h4>

                    {progressbars.map((progressbar, key) => (
                        <Row className="align-items-center g-0 mt-3" key={key}>
                            <Col sm={3}>
                                <p className="text-truncate mt-1 mb-0"><i className="mdi mdi-circle-medium text-warning me-2"></i> {progressbar.title} </p>
                            </Col>
                            <Col sm={9}>
                                <div className="mt-1" style={{ height: "6px" }}>
                                    <Progress
                                        value={progressbar.value}
                                        color={progressbar.color}
                                        size="sm"
                                        className="progress-sm"
                                    />
                                </div>
                            </Col>
                        </Row>
                    ))}
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TopProduct