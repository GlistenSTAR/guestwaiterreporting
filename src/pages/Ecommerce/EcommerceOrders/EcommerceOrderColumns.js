import React from "react"
import { Link } from "react-router-dom"
import { Badge, Input, Label } from "reactstrap"

const EcommerceOrderColumns = toggleModal => [
  {
    isDummyField: true,
    dataField: "id",
    text: "Id",
    formatter: (cellContent, row) => (
      <div className="form-check text-center font-size-16">
        <Input type="checkbox" className="form-check-input" id={'checkbox' + row.id } />
        <Label className="form-check-label" htmlFor={'checkbox' + row.id }>
          &nbsp;
        </Label>
      </div>
    ),
  },
  {
    dataField: "orderId",
    text: "Order ID",
    sort: true,
    formatter: (cellContent, row) => (
      <Link to="#" className="text-dark fw-bold">
        {row.orderId}
      </Link>
    ),
  },
  {
    dataField: "Date",
    text: "Date",
    sort: true,
  },
  {
    dataField: "billingName",
    text: "Billing Name",
    sort: true,
  },
  {
    dataField: "total",
    text: "Total",
    sort: true,
  },
  {
    dataField: "paymentStatus",
    text: "Payment Status",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className={"badge bg-pill font-size-12 bg-soft-" + row.badgeclass}
        color={row.badgeClass}
        pill
      >
        {row.paymentStatus}
      </Badge>
    ),
  },

  {
    isDummyField: true,
    dataField: "Action",
    text: "Action",
    sort: true,
    formatter: () => (
      <>
        <Link to="#" className="px-3 text-primary"><i className="uil uil-pen font-size-18"></i></Link>
        <Link to="#" className="px-3 text-danger"><i className="uil uil-trash-alt font-size-18"></i></Link>
      </>
    ),
  },
]

export default EcommerceOrderColumns
