import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
// Editable
import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory, { Type } from "react-bootstrap-table2-editor"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const products = [
  { id: 1, age: 25, type: "Male", name: "David McHenry" },
  { id: 2, age: 34, type: "Male", name: "Frank Kirk" },
  { id: 3, age: 67, type: "Male", name: "Rafael Morales" },
  { id: 4, age: 23, type: "Male", name: "Mark Ellison" },
  { id: 5, age: 78, type: "Female", name: "Minnie Walter" },
]

const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "name",
    text: "Name",
  },
  {
    dataField: "age",
    text: "Age(AutoFill)",
  },
  {
    dataField: "type",
    text: "Gender(AutoFill and Editable)",
    editor: {
      type: Type.SELECT,
      options: [{
        value: 'Male',
        label: 'Male'
      }, {
        value: 'Female',
        label: 'Female'
      }]
    }
  },
]

const EditableTables = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Editable Table" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Datatable Editable </CardTitle>
                  <p className="card-title-desc">Table Edits is a lightweight jQuery plugin for making table rows editable.</p>
                  
                  <div className="table-responsive">
                    <BootstrapTable
                      keyField="id"
                      data={products}
                      columns={columns}
                      cellEdit={cellEditFactory({ mode: "click" })}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditableTables
