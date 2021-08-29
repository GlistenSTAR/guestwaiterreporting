import React from "react"
import {
  Alert,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  UncontrolledAlert,
  Container,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiAlert = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Alerts" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Alerts </CardTitle>
                  <p className="card-title-desc">Alerts are available for any length of
                  text, as well as an optional dismiss button. For proper styling, use one
                                            of the four <strong>required</strong> contextual classes (e.g., <code
                      className="highlighter-rouge">.alert-success</code>). For inline
                                            dismissal, use the alerts jQuery plugin.</p>

                  <div className="">
                    <Alert color="primary">
                      A simple primary alert—check it out!
                    </Alert>
                    <Alert color="secondary" role="alert">
                      A simple secondary alert—check it out!
                    </Alert>
                    <Alert color="success" role="alert">
                      A simple success alert—check it out!
                    </Alert>
                    <Alert color="danger" role="alert">
                      A simple danger alert—check it out!
                    </Alert>
                    <Alert color="warning" role="alert">
                      A simple warning alert—check it out!
                    </Alert>
                    <Alert color="info" className="mb-0" role="alert">
                      A simple info alert—check it out!
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Link color </CardTitle>
                  <p className="card-title-desc">Use the <code
                    className="highlighter-rouge">.alert-link</code> utility class to
                                            quickly provide matching colored links within any alert.</p>

                  <div className="">
                    <Alert color="primary">
                      A simple primary alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="secondary">
                      A simple secondary alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert colr="success">
                      A simple success alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="danger">
                      A simple danger alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="warning">
                      A simple warning alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                    <Alert color="info" className="mb-0">
                      A simple info alert with{" "}
                      <Link to="#" className="alert-link">
                        an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dismissing </CardTitle>
                  <p className="card-title-desc">
                    Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding
                    to the right of the alert and positions the <code>.btn-close</code> button.
                    </p>

                  <div className="">
                    <UncontrolledAlert color="primary" className="alert-dismissible fade show">
                      A simple primary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="secondary" className="alert-dismissible fade show" role="alert">
                      A simple secondary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="success" className="alert-dismissible fade show" role="alert">
                      A simple success alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="danger" className="alert-dismissible fade show" role="alert">
                      A simple danger alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="warning" className="alert-dismissible fade show" role="alert">
                      A simple warning alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="info"
                      className="mb-0"
                      role="alert"
                    >
                      A simple info alert—check it out!
                    </UncontrolledAlert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">With Icon </CardTitle>
                  <div className="">
                    <UncontrolledAlert
                      color="primary"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-user-circle me-2"></i> A simple
                      primary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-pen me-2"></i> A simple
                      secondary alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="success"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-check me-2"></i> A simple success
                      alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="danger"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-exclamation-octagon me-2"></i> A simple
                      danger alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="warning"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-exclamation-triangle me-2"></i> A simple
                      warning alert—check it out!
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="info"
                      className="alert-dismissible fade show mb-0"
                      role="alert"
                    >
                      <i className="uil uil-question-circle me-2"></i> A
                      simple info alert—check it out!
                    </UncontrolledAlert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Alert Border Examples
                  </CardTitle>
                  <p className="card-title-desc">Add <code>alert-border</code>  class for Alert Border Examples and add <code>alert-border-*</code> color classes for border color variant</p>
                  <div className="">
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-border alert-border-primary alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-user-circle text-primary font-size-16 me-2"></i> A simple border primary alert
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-border alert-border-secondary alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-pen font-size-16 text-secondary me-2"></i> A simple border secondary alert
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-border alert-border-success alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-check font-size-16 text-success me-2"></i> A simple border success alert
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-border alert-border-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-exclamation-octagon font-size-16 text-danger me-2"></i> A simple border danger alert
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-border alert-border-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="uil uil-exclamation-triangle font-size-16 text-warning me-2"></i> A simple border warning alert
                    </UncontrolledAlert>
                    <UncontrolledAlert
                      color="secondary"
                      className="alert-border alert-border-info alert-dismissible fade show mb-0"
                      role="alert"
                    >
                      <i className="uil uil-question-circle font-size-16 text-info me-2"></i> A simple border info alert
                    </UncontrolledAlert>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-0">
                    Alert Examples
                  </CardTitle>
                  <Row>
                    <Col sm={6}>
                      <UncontrolledAlert
                        color="success"
                        className="alert-success alert-dismissible fade show mt-4 px-4 mb-0 text-center"
                        role="alert"
                      >
                        <i className="uil uil-check-circle d-block display-4 mt-2 mb-3 text-success"></i>
                        <h5 className="text-success">Success</h5>
                        <p>A simple success alert</p>
                      </UncontrolledAlert>
                    </Col>
                    <Col sm={6}>
                      <UncontrolledAlert
                        color="danger"
                        className="alert-danger alert-dismissible fade show mt-4 px-4 mb-0 text-center"
                        role="alert"
                      >
                        <i className="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                        <h5 className="text-danger">Error</h5>
                        <p>A simple danger alert</p>
                      </UncontrolledAlert>
                    </Col>
                    <Col sm={6}>
                      <UncontrolledAlert
                        color="secondary"
                        className="alert-border alert-border-warning alert-dismissible fade show mt-4 px-4 mb-0 text-center"
                        role="alert"
                      >
                        <i className="uil uil-exclamation-triangle d-block display-4 mt-2 mb-3 text-warning"></i>
                        <h5 className="text-warning">Warning</h5>
                        <p>A simple warning alert</p>
                      </UncontrolledAlert>
                    </Col>
                    <Col sm={6}>
                      <UncontrolledAlert
                        color="secondary"
                        className="alert-border alert-border-info alert-dismissible fade show mt-4 px-4 mb-0 text-center"
                        role="alert"
                      >
                        <i className="uil uil-question-circle d-block display-4 mt-2 mb-3 text-info"></i>
                        <h5 className="text-info">Info</h5>
                        <p>A simple Info alert</p>
                      </UncontrolledAlert>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiAlert
