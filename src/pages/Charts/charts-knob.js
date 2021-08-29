import React, { useState } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

import Knob from "../AllCharts/knob/knob"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const ChartsKnob = () => {
  const [value1, setvalue] = useState(35)
  const [value_cur, setvalue_cur] = useState(29)
  const [value_prev, setvalue_prev] = useState(44)
  const [angle, setangle] = useState(35)
  const [steps, setsteps] = useState(-11000)
  const [angleArc, setangleArc] = useState(29)
  const [ang_offset_arc, setang_offset_arc] = useState(75)
  const [readonly, setreadonly] = useState(80)

  const handleChange = newValue => {
    setvalue(newValue)
  }
  const handleChangecursor = newValue => {
    setvalue_cur(newValue)
  }
  const handleChangeprev = newValue => {
    setvalue_prev(newValue)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Charts" breadcrumbItem="Jquery Knob" />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Nice, downward compatible, touchable, jQuery dial
                  </p>

                  <Row>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">
                          Disable display input
                        </h5>
                        <Knob
                          value={value1}
                          height={200}
                          width={150}
                          fgColor="#5b73e8"
                          displayCustom={() => {
                            return false
                          }}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">Cursor mode</h5>
                        <Knob
                          value={value_cur}
                          height={200}
                          width={150}
                          fgColor="#34c38f"
                          cursor={true}
                          displayCustom={() => {
                            return false
                          }}
                          onChange={handleChangecursor}
                        />
                      </div>
                    </Col>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">
                          Display previous value
                        </h5>
                        <Knob
                          value={value_prev}
                          height={200}
                          width={150}
                          fgColor="#50a5f1"
                          onChange={handleChangeprev}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">Angle offset</h5>
                        <Knob
                          value={angle}
                          fgColor="#f1b44c"
                          lineCap="round"
                          height={200}
                          step={1000}
                          width={150}
                          onChange={e => {
                            setangle(e)
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">
                          {" "}
                          5-digit values, step 1000
                        </h5>
                        <Knob
                          value={steps}
                          fgColor="#f46a6a"
                          step={10}
                          min={-15000}
                          max={15000}
                          height={200}
                          width={150}
                          onChange={e => {
                            setsteps(e)
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">
                          Angle offset and arc
                        </h5>
                        <Knob
                          value={angleArc}
                          fgColor="#343a40"
                          angleArc={360}
                          angleOffset={5}
                          cursor={true}
                          height={200}
                          width={150}
                          onChange={e => {
                            setangleArc(e)
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">Readonly</h5>
                        <Knob
                          value={readonly}
                          fgColor="#f06292"
                          thickness={0.12}
                          readOnly={true}
                          height={150}
                          width={150}
                          onChange={e => {
                            setreadonly(e)
                          }}
                        />
                      </div>
                    </Col>
                    <Col xl="4" sm="6">
                      <div className="text-center" dir="ltr">
                        <h5 className="font-size-14 mb-3">
                          {" "}
                          Angle offset and arc
                        </h5>
                        <Knob
                          value={ang_offset_arc}
                          fgColor="#74788d"
                          thickness={0.18}
                          angleArc={300}
                          angleOffset={5}
                          cursor={true}
                          height={150}
                          width={150}
                          onChange={e => {
                            setang_offset_arc(e)
                          }}
                        />
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

export default ChartsKnob
