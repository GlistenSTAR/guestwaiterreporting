import React, { useState } from "react"

import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  CardTitle,
  Container,
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormRepeater = () => {
  const [rows1, setrows1] = useState([])
  const [rows2, setrows2] = useState([])

  const id = 1;

  function handleAddRowNested() {
    const item1 = { name1: "" }
    setrows1([...rows1, item1])

  }

  function handleRemoveRow(e, id) {
    if (typeof id != "undefined")
      document.getElementById("addrMain").style.display = "none"
  }

  function handleRemoveRow1(e, id) {
    if (typeof id != "undefined")
      document.getElementById("addre" + id).style.display = "none"
  }

  function handleRemoveRowNested(e, id) {
    document.getElementById("nested" + id).style.display = "none"
  }

  function handleRemoveRow2(e, id) {
    document.getElementById("form-first-repeater").style.display = "none"
  }

  function handleAddRowNested1() {
    const item2 = { name1: "" }
    setrows2([...rows2, item2])
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Repeater" />

          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Example</CardTitle>
                  <Form className="repeater" encType="multipart/form-data">
                    <div data-repeater-list="group-a" id="form-first-repeater">
                      <div data-repeater-item className="row">
                        <div className="mb-3 col-lg-2">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" name="untyped-input" className="form-control" />
                        </div>

                        <div className="mb-3 col-lg-2">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" className="form-control" />
                        </div>

                        <div className="mb-3 col-lg-2">
                          <label htmlFor="subject">Subject</label>
                          <input type="text" id="subject" className="form-control" />
                        </div>

                        <div className="mb-3 col-lg-2">
                          <label htmlFor="resume">Resume</label>
                          <input type="file" className="form-control" id="resume" />
                        </div>

                        <div className="mb-3 col-lg-2">
                          <label htmlFor="message">Message</label>
                          <textarea id="message" className="form-control"></textarea>
                        </div>

                        <Col lg={2} className="align-self-center">
                          <div className="d-grid">
                            <input data-repeater-delete type="button" className="btn btn-primary" onClick={e => {
                                  handleRemoveRow2(e, id)
                                }} value="Delete" />
                          </div>
                        </Col>
                      </div>

                    </div>

                    {rows2.map((item2, idx) => (
                      <React.Fragment key={idx}>
                        <div data-repeater-list="group-a" id={"addre" + idx}>
                          <div data-repeater-item className="row">
                            <div className="mb-3 col-lg-2">
                              <label htmlFor="name">Name</label>
                              <input type="text" id="name" name="untyped-input" className="form-control" />
                            </div>

                            <div className="mb-3 col-lg-2">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" className="form-control" />
                            </div>

                            <div className="mb-3 col-lg-2">
                              <label htmlFor="subject">Subject</label>
                              <input type="text" id="subject" className="form-control" />
                            </div>

                            <div className="mb-3 col-lg-2">
                              <label htmlFor="resume">Resume</label>
                              <input type="file" className="form-control-file" id="resume" />
                            </div>

                            <div className="mb-3 col-lg-2">
                              <label htmlFor="message">Message</label>
                              <textarea id="message" className="form-control"></textarea>
                            </div>

                            <Col lg={2} className="align-self-center d-grid">
                              <input data-repeater-delete type="button" className="btn btn-primary"
                                onClick={e => {
                                  handleRemoveRow1(e, id)
                                }}
                                value="Delete" />
                            </Col>
                          </div>

                        </div>
                      </React.Fragment>
                    ))}

                    <input data-repeater-create type="button" onClick={() => {
                      handleAddRowNested1()
                    }} className="btn btn-success mt-3 mt-lg-0" value="Add" />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Nested</CardTitle>
                  <Form className="outer-repeater">
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <div className="mb-3">
                          <Label htmlFor="formname">Name : </Label>
                          <Input
                            type="text"
                            id="formname"
                            placeholder="Enter your Name..."
                            className="form-control"
                          />
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="formemail">Email :</Label>
                          <Input
                            type="email"
                            id="formemail"
                            placeholder="Enter your Email..."
                            className="form-control"
                          />
                        </div>

                        <div className="inner-repeater mb-4">
                          <Label>Phone no :</Label>
                          <table style={{ width: "100%" }}>
                            <tbody>
                              <tr id="addrMain" key="">
                                <td>
                                  <Row className="mb-2">
                                    <Col md="10">
                                      <Input
                                        type="text"
                                        className="inner form-control"
                                        placeholder="Enter your phone no... 1"
                                      />
                                    </Col>
                                    <Col md="2">
                                      <Button
                                        color="primary"
                                        className="btn-block inner"
                                        style={{ width: "100%" }}
                                        onClick={e => {
                                          handleRemoveRow(e, id)
                                        }}
                                      >
                                        {" "}
                                        Delete{" "}
                                      </Button>
                                    </Col>
                                  </Row>
                                </td>
                              </tr>

                              {rows1.map((item1, id) => (
                                <tr id={"nested" + id} key={id}>
                                  <td>
                                    <Row className="mb-2">
                                      <Col md="10">
                                        <Input
                                          type="text"
                                          className="inner form-control"
                                          placeholder={
                                            "Enter your phone no... " +
                                            (id + 2)
                                          }
                                        />
                                      </Col>
                                      <Col md="2">
                                        <Button
                                          onClick={e => {
                                            handleRemoveRowNested(e, id)
                                          }}
                                          color="primary"
                                          className="btn-block inner"
                                          style={{ width: "100%" }}
                                        >
                                          {" "}
                                          Delete{" "}
                                        </Button>
                                      </Col>
                                    </Row>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <Button
                            onClick={() => {
                              handleAddRowNested()
                            }}
                            color="success"
                            className="mt-1"
                          >
                            Add Number
                          </Button>
                        </div>

                        <div className="mb-3">
                          <Label className="d-block mb-3">Gender :</Label>
                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="customRadioInline1"
                              name="customRadioInline1"
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="customRadioInline1"
                            >
                              Male
                            </Label>
                          </div>
                          &nbsp;
                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="customRadioInline2"
                              name="customRadioInline1"
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="customRadioInline2"
                            >
                              Female
                            </Label>
                          </div>
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="formmessage">Message :</Label>
                          <Input
                            type="textarea"
                            id="formmessage"
                            className="form-control"
                            rows="3"
                          />
                        </div>
                        <Button type="submit" color="primary">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormRepeater
