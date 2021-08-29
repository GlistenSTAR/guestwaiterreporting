import React, { useState } from "react"

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Media,
  Collapse
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Images
import faqimg from "../../assets/images/faqs-img.png"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const PagesFaqs = () => {
  const [isOpenCollapse1, setIsOpenCollapse1] = useState(true);

  const toggleCollapse1 = () => setIsOpenCollapse1(!isOpenCollapse1);

  const [isOpenCollapse2, setIsOpenCollapse2] = useState(false);

  const toggleCollapse2 = () => setIsOpenCollapse2(!isOpenCollapse2);

  const [isOpenCollapse3, setIsOpenCollapse3] = useState(false);

  const toggleCollapse3 = () => setIsOpenCollapse3(!isOpenCollapse3);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="FAQs" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Row className="justify-content-center mt-4">
                    <Col lg={5}>
                      <div className="text-center">
                        <h5>Can't find what you are looking for?</h5>
                        <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>

                        <div>
                          <Button type="button" color="primary" className="mt-2 me-2 waves-effect waves-light">Email Us</Button>{" "}
                          <Button type="button" color="success" className="mt-2 waves-effect waves-light">Send us a tweet</Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xl={3} sm={5} className="mx-auto">
                      <div>
                        <img src={faqimg} alt="" className="img-fluid mx-auto d-block" />
                      </div>
                    </Col>
                    <Col xl={8}>
                      <div id="faqs-accordion" className="custom-accordion mt-5 mt-xl-0">
                        <Card className="border shadow-none">
                          <Link to="#" className="text-dark" onClick={toggleCollapse1}>
                            <div className="bg-light p-3">

                              <div className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle font-size-22">
                                      <i className="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <h5 className="font-size-16 mb-1">General Questions</h5>
                                  <p className="text-muted text-truncate mb-0">General Questions</p>
                                </div>
                                <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                              </div>

                            </div>
                          </Link>
                          <Collapse isOpen={isOpenCollapse1} id="faqs-gen-ques-collapse">
                            <div className="p-4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">What is Lorem Ipsum ?</h5>
                                        <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                      </div>
                                    </Media>

                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Where does it come from ?</h5>
                                        <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                      </div>
                                    </Media>

                                  </div>
                                </Col>

                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Why do we use it ?</h5>
                                        <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                      </div>
                                    </Media>

                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Collapse>
                        </Card>

                        <Card className="border shadow-none">
                          <Link to="#" className="text-dark" onClick={toggleCollapse2}>
                            <div className="bg-light p-3">

                              <div className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle font-size-22">
                                      <i className="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <h5 className="font-size-16 mb-1">Privacy Policy</h5>
                                  <p className="text-muted text-truncate mb-0">Privacy Policy Questions</p>
                                </div>
                                <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                              </div>

                            </div>
                          </Link>
                          <Collapse isOpen={isOpenCollapse2}>
                            <div className="p-4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Where can I get some ?</h5>
                                        <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                      </div>
                                    </Media>

                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Why do we use it ?</h5>
                                        <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                      </div>
                                    </Media>

                                  </div>
                                </Col>

                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Where does it come from ?</h5>
                                        <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                      </div>
                                    </Media>

                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Collapse>
                        </Card>

                        <Card className="border shadow-none">
                          <Link to="#" className="text-dark" onClick={toggleCollapse3}>
                            <div className="bg-light p-3">

                              <div className="d-flex align-items-center">
                                <div className="me-3">
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle font-size-22">
                                      <i className="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <h5 className="font-size-16 mb-1">Pricing & Plans</h5>
                                  <p className="text-muted text-truncate mb-0">Pricing & Plans Questions</p>
                                </div>
                                <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                              </div>

                            </div>
                          </Link>
                          <Collapse isOpen={isOpenCollapse3}>
                            <div className="p-4">
                              <Row>
                                <Col md="6">
                                  <div>
                                    <Media className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Where does it come from ?</h5>
                                        <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                      </div>
                                    </Media>

                                    <div className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">What is Lorem Ipsum ?</h5>
                                        <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                      </div>
                                    </div>

                                  </div>
                                </Col>

                                <Col md="6">
                                  <div>
                                    <div className="d-flex mt-4">
                                      <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                          <i className="uil uil-question-circle"></i>
                                        </div>
                                      </div>

                                      <div className="flex-1">
                                        <h5 className="font-size-16 mt-1">Why do we use it ?</h5>
                                        <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                      </div>
                                    </div>

                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Collapse>
                        </Card>
                      </div>
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

export default PagesFaqs
