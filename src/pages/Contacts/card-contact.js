import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  DropdownToggle,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap"

const CardContact = props => {
  const { user } = props

  return (
    <React.Fragment>
      <Col xl="3" sm="6">
        <Card className="text-center">
          <CardBody>
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
            {!user.img ? (
              <div className="avatar-lg mx-auto mb-4">
                <div className="avatar-title bg-soft-primary rounded-circle text-primary">
                  <i className="mdi mdi-account-circle display-4 m-0 text-primary"></i>
                </div>
              </div>
            ) : (
                <div className="mb-4">
                  <img
                    className="avatar-lg rounded-circle img-thumbnail"
                    src={user.img}
                    alt=""
                  />
                </div>
              )}

            <h5 className="font-size-16 mb-1">
              <Link to="#" className="text-dark">
                {user.name}
              </Link>
            </h5>
            <p className="text-muted mb-2">{user.designation}</p>
          </CardBody>
          <div className="btn-group" role="group">
            <Button type="button" color="btn-outline-light" className="text-truncate"><i className="uil uil-user me-1"></i> Profile</Button>
            <Button type="button" color="btn-outline-light" className="text-truncate"><i className="uil uil-envelope-alt me-1"></i> Message</Button>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardContact.propTypes = {
  user: PropTypes.object
}

export default CardContact
