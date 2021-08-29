import React from "react"
import {
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const projectColumns = () => [
  {
    dataField: "id",
    text: "#",
    sort: true,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "startDate",
    text: "Date",
    sort: true,
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    formatter: (cellContent, project) => (
      <span className={"badge font-size-12 bg-soft-" + project.badge}>{project.status}</span>
    ),
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: (cellContent, user) => (
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
    ),
  },
]

export default projectColumns
