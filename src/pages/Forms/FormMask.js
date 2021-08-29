import React from "react"
import {
  Row,
  Col,
  Form,
  Label,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

// Form Mask
import InputMask from "react-input-mask"
import MaterialInput from "@material-ui/core/Input"

const FormMask = () => {

  const Repeat = props => (
    <InputMask
      mask="9999999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )


  const IPV4 = props => (
    <InputMask
      mask="999.999.999.999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )
  const TAX = props => (
    <InputMask
      mask="99-9999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Phone = props => (
    <InputMask
      mask="(999) 999-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Currency = props => (
    <InputMask
      mask="$ 999,999,999.00"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} prefix="$" type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Date1 = props => (
    <InputMask
      mask="99/99/9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Date2 = props => (
    <InputMask
      mask="99-99-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  const Date3 = props => (
    <InputMask
      mask="9999-99-99 99:99:99"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  )

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Mask" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Example</CardTitle>
                  <Row>
                    <Col lg="6">
                      <div>
                        <Form action="#">
                          <div className="mb-4">
                            <Label>Date Style 1</Label>
                            <Date1 />
                            <span className="font-13 text-muted">
                              dd/mm/yyyy
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>Date Style 2</Label>
                            <Date2 />
                            <span className="font-13 text-muted">
                              dd-mm-yyyy
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label className="form-label" for="input-datetime">Date time</Label>
                            <Date3 />
                            <span className="text-muted">e.g "yyyy-mm-dd'T'HH:MM:ss"</span>
                          </div>
                          <div className="mb-4">
                            <Label>Currency</Label>
                            <Currency />
                            <span className="font-13 text-muted">
                              $ 0.00
                            </span>
                          </div>
                        </Form>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="mt-4 mt-lg-0">
                        <Form action="#">
                          <div className="mb-4">
                            <Label>repeat</Label>
                            <Repeat />
                            <span className="font-13 text-muted">
                              9999999999
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>Mask</Label>
                            <TAX />
                            <span className="font-13 text-muted">
                              99-9999999
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>IP address</Label>
                            <IPV4 />
                            <span className="font-13 text-muted">
                              192.168.110.310
                            </span>
                          </div>

                          <div className="mb-4">
                            <Label>Phone</Label>
                            <Phone />
                            <span className="font-13 text-muted">
                              (999) 999-9999
                            </span>
                          </div>


                        </Form>
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

export default FormMask
