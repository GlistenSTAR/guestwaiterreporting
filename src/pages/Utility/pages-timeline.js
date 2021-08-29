import React, { useState } from "react"
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { Link } from "react-router-dom"

const PagesTimeline = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const statuses = [
    {
      id: 1,
      date: "03 May",
      title: "Timeline event One",
      description: "If several languages coalesce, the grammar of the resulting the individual",
    },
    {
      id: 2,
      date: "08 May",
      title: "Timeline event Two",
      description: "Sed ut perspiciatis unde omnis iste natus error sit illo inventore veritatis",
    },
    {
      id: 3,
      date: "11 May",
      title: "Timeline event Three",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    },
    {
      id: 4,
      date: "16 May",
      title: "Timeline event Four",
      description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
    },
    {
      id: 5,
      date: "23 May",
      title: "Timeline event Five",
      description: "Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut",
    },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Timeline" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Horizontal Timeline</CardTitle>

                  <div className="hori-timeline">
                    <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">
                      {step1 ? (
                        <>
                          <div className="item event-list" style={{ display: "inline-table" }}>
                            <div className="event-date">
                              <div className="text-primary">03 May</div>
                            </div>

                            <div className="px-3">
                              <h5>First event</h5>
                              <p className="text-muted">It will be as simple as occidental in fact it will be Cambridge simplified</p>
                              <div>
                                <Link to="#">View more <i className="uil uil-arrow-right"></i></Link>
                              </div>
                            </div>
                          </div>

                          <div className="item event-list" style={{ display: "inline-table" }}>
                            <div className="event-date">
                              <div className="text-primary">08 May</div>
                            </div>

                            <div className="px-3">
                              <h5>Second event</h5>
                              <p className="text-muted">To an English person, it will seem like simplified English existence occidental.</p>
                              <div>
                                <Link to="#">View more <i className="uil uil-arrow-right"></i></Link>
                              </div>
                            </div>
                          </div>
                          <div className="item event-list" style={{ display: "inline-table" }}>
                            <div className="event-date">
                              <div className="text-primary">11 May</div>
                            </div>

                            <div className="px-3">
                              <h5>Third event</h5>
                              <p className="text-muted">For science, music, sport, etc, Europe uses the same vocabulary.</p>
                              <div>
                                <Link to="#">View more <i className="uil uil-arrow-right"></i></Link>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {step2 ? (
                        <>
                        <div className="item event-list" style={{ display: "inline-table" }}>
                            <div className="event-date">
                              <div className="text-primary">16 May</div>
                            </div>

                            <div className="px-3">
                              <h5>Fourth event</h5>
                              <p className="text-muted">New common language will be more simple than existing.</p>
                              <div>
                                <Link to="#">View more <i className="uil uil-arrow-right"></i></Link>
                              </div>
                            </div>
                          </div>

                          <div className="item event-list" style={{ display: "inline-table" }}>
                            <div className="event-date">
                              <div className="text-primary">23 May</div>
                            </div>

                            <div className="px-3">
                              <h5>Fifth event</h5>
                              <p className="text-muted">It will be as simple as occidental in fact it will be Cambridge</p>
                              <div>
                                <Link to="#">View more <i className="uil uil-arrow-right"></i></Link>
                              </div>
                            </div>
                          </div>
                          <div className="item event-list" style={{ display: "inline-table" }}>
                            <div className="event-date">
                              <div className="text-primary">27 May</div>
                            </div>

                            <div className="px-3">
                              <h5>Sixth event</h5>
                              <p className="text-muted">To an English person, it will seem like simplified English existence.</p>
                              <div>
                                <Link to="#">View more <i className="uil uil-arrow-right"></i></Link>
                              </div>
                            </div>
                          </div>

                        </>
                      ) : null}

                      <div className="owl-nav" style={{ textAlign: "center" }}>
                        <button
                          type="button"
                          onClick={() => {
                            setStep1(true)
                            setStep2(false)
                          }}
                          className="border-0"
                          disabled={step1}
                        >
                          <i className="mdi mdi-chevron-left" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setStep1(false)
                            setStep2(true)
                          }}
                          className="border-0"
                          disabled={step2}
                        >
                          <i className="mdi mdi-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-5 h4">Vertical Timeline</CardTitle>
                  <div className="">
                    <ul className="verti-timeline list-unstyled">
                      {/* Render Horizontal Timeline Events */}
                      {statuses.map((status, key) => (
                        <li key={key} className="event-list">
                          <div className="event-date text-primar">{status.date}</div>
                          <h5>{status.title}</h5>
                          <p className="text-muted">{status.description}</p>
                        </li>
                      ))}
                    </ul>
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

export default PagesTimeline