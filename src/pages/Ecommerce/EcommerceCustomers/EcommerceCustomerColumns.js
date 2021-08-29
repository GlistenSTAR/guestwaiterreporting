import React from "react"
import {
  Badge,
} from "reactstrap"
import { Link } from "react-router-dom"

const EcommerceCustomerColumns = () => [
  {
    dataField: "customerId",
    text: "Customer ID",
    sort: true,
  },
  {
    dataField: "customer",
    text: "Customer",
    sort: true,
  },
  {
    text: "Email",
    dataField: "email",
    sort: true,
    formatter: (cellContent, row) => (
      <>
        <p className="mb-0">{row.email}</p>
      </>
    ),
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className={"badge bg-pill font-size-12 bg-soft-" + row.badgeclass}
        color={row.badgeClass}
        pill
      >
        {row.status}
      </Badge>
    ),
  },
  {
    dataField: "joiningDate",
    text: "Join Date",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: () => (
      <>
        <Link to="#" className="px-3 text-primary"><i className="uil uil-pen font-size-18"></i></Link>
        <Link to="#" className="px-3 text-danger"><i className="uil uil-trash-alt font-size-18"></i></Link>
      </>
    ),
  },
]

export default EcommerceCustomerColumns
