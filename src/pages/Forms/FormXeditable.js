import React from "react"
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap"

import Editable from "react-bootstrap-editable"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormXeditable = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Xeditable" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Inline Example</CardTitle>
                  <p className="card-title-desc">
                    This library allows you to create editable elements on your
                    page. It can be used with any engine (bootstrap, jquery-ui,
                    jquery only) and includes both popup and inline modes.
                    Please try out demo to see how it works.
                  </p>

                  <div className="table-responsive">
                    <Table responsive striped className="table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: "50%" }}>Inline</th>
                          <th>Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Simple Text Field</td>
                          <td>
                            <Editable
                              alwaysEditing={false}
                              disabled={false}
                              editText="superuser"
                              id={null}
                              isValueClickable={false}
                              mode="inline"
                              placement="top"
                              showText
                              type="textfield"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Empty text field, required</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="Empty"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              placement="top"
                              showText
                              type="textfield"
                              validate={null}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Select, local array, custom display</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="male"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              options={["male", "female"]}
                              placement="top"
                              showText
                              type="select"
                              validate={null}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>Combodate</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="Enter Date"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              placement="top"
                              showText
                              type="date"
                              validate={null}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Textarea, buttons below. Submit by ctrl+enter</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="Awesome User"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              placement="top"
                              showText
                              type="textarea"
                              validate={null}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormXeditable
