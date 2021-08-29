import React from "react"

import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormLayouts = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Layouts" />
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Form Grid layout</CardTitle>

                  <Form>
                    <div className="mb-3">
                      <Label for="formrow-firstname-Input">First name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>

                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label for="formrow-email-Input">Email</Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="formrow-email-Input"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label for="formrow-password-Input">Password</Label>
                          <Input
                            type="password"
                            className="form-control"
                            id="formrow-password-Input"
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Label for="formrow-InputCity">City</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputCity"
                          />
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="mb-3">
                          <Label for="formrow-InputState">State</Label>
                          <select
                            id="formrow-InputState"
                            className="form-control"
                          >
                            <option>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </Col>

                      <Col lg={4}>
                        <div className="mb-3">
                          <Label for="formrow-InputZip">Zip</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputZip"
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="mb-3">
                      <div className="form-check">
                        <Input
                          type="checkbox"
                          className="form-check-Input"
                          id="formrow-customCheck"
                        />
                        <Label
                          className="form-check-Label"
                          for="formrow-customCheck"
                        >
                          Check me out
                        </Label>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary w-md">
                        Submit
                      </button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Horizontal form layout</CardTitle>

                  <Form>
                    <div className="row mb-4">
                      <Label
                        for="horizontal-firstname-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        First name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                        />
                      </Col>
                    </div>
                    <div className="row mb-4">
                      <Label
                        for="horizontal-email-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="email"
                          className="form-control"
                          id="horizontal-email-Input"
                        />
                      </Col>
                    </div>
                    <div className="row mb-4">
                      <Label
                        for="horizontal-password-Input"
                        className="col-sm-3 col-form-Label"
                      >
                        Password
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="password"
                          className="form-control"
                          id="horizontal-password-Input"
                        />
                      </Col>
                    </div>

                    <div className="row justify-content-end">
                      <Col sm={9}>
                        <div className="form-check mb-4">
                          <Input
                            type="checkbox"
                            className="form-check-Input"
                            id="horizontal-customCheck"
                          />
                          <Label
                            className="form-check-Label"
                            for="horizontal-customCheck"
                          >
                            Remember me
                          </Label>
                        </div>

                        <div>
                          <Button
                            type="submit"
                            color="primary"
                            className="w-md"
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h5 mb-4">Auto Sizing</CardTitle>

                  <Form className="row gy-2 gx-3 align-items-center">
                    <div className="col-sm-auto">
                      <Label className="visually-hidden" for="autoSizingInput">Name</Label>
                      <Input type="text" className="form-control" id="autoSizingInput" placeholder="Jane Doe" />
                    </div>
                    <div className="col-sm-auto">
                      <Label className="visually-hidden" for="autoSizingInputGroup">Username</Label>
                      <InputGroup>
                        <div className="input-group-text">@</div>
                        <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
                      </InputGroup>
                    </div>
                    <div className="col-sm-auto">
                      <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select className="form-select" id="autoSizingSelect">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-sm-auto">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                        <label className="form-check-label" for="autoSizingCheck">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <button type="submit" className="btn btn-primary w-md">Submit</button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* end row  */}
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h5 mb-4">Inline forms</CardTitle>

                  <Form className="row row-cols-lg-auto g-3 align-items-center">
                    <Col xs={12}>
                      <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                      <InputGroup>
                        <div className="input-group-text">@</div>
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                      </InputGroup>
                    </Col>

                    <Col xs={12}>
                      <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                      <select className="form-select" id="inlineFormSelectPref">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </Col>

                    <Col xs={12}>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                        <label className="form-check-label" for="inlineFormCheck">
                          Remember me
                        </label>
                      </div>
                    </Col>

                    <Col xs={12}>
                      <button type="submit" className="btn btn-primary w-md">Submit</button>
                    </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h5">Floating labels</CardTitle>
                  <p className="card-title-desc">Create beautifully simple form labels that float over your input fields.</p>

                  <Form>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="Maria Laird" />
                      <label for="floatingnameInput">Name</label>
                    </div>
                    <Row>
                      <Col md={6}>
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingemailInput" placeholder="Enter Email address" value="name@example.com" />
                          <label for="floatingemailInput">Email address</label>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-floating mb-3">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <label for="floatingSelectGrid">Works with selects</label>
                        </div>
                      </Col>
                    </Row>

                    <div className="mb-3">

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="floatingCheck" />
                        <label className="form-check-label" for="floatingCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary w-md">Submit</button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* container-fluid */}
      </div>
    </React.Fragment>
  )
}

export default FormLayouts
