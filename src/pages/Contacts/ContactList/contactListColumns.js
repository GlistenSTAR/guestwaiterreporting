import React from "react"
import {
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { Link } from "react-router-dom"

const contactListColumns = () => [
  {
    text: "Name",
    dataField: "name",
    sort: true,
    formatter: (cellContent, user) => (
      <>
        {!user.img ? (
          <div className="avatar-xs d-inline-block me-2">
            <div className="avatar-title bg-soft-primary rounded-circle text-primary">
              <i className="mdi mdi-account-circle m-0"></i>
            </div>
          </div>
        ) : (
            <img
              className="avatar-xs rounded-circle me-2"
              src={user.img}
              alt=""
            />
          )}
        <Link to="#" className="text-body">
          {user.name}
        </Link>
      </>
    ),
  },
  {
    text: "Position",
    dataField: "positions",
    sort: true,
    formatter: (cellContent, user) => (
      <>
        {user.designation}
      </>
    ),
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: (cellContent, user) => (
      <ul className="list-inline font-size-20 contact-links mb-0">
        <li className="list-inline-item">
          <Link to="#" className="px-2 text-primary"><i className="uil uil-pen font-size-18"></i></Link>
        </li>
        <li className="list-inline-item">
          <Link to="#" className="px-2 text-danger"><i className="uil uil-trash-alt font-size-18"></i></Link>
        </li>
        <li className="list-inline-item dropdown">
          <UncontrolledDropdown>
            <DropdownToggle tag="a" className="text-muted font-size-18 px-2" caret>
              <i className="uil uil-ellipsis-v"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
      </ul>
    ),
  },
]

export default contactListColumns
