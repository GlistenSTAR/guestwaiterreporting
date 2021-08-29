import React, { useState } from "react"
import { Link } from "react-router-dom"

import { Col, Row, Card, CardBody, CardTitle, Container } from "reactstrap"
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiButtons = () => {
  const [drp_link, setdrp_link] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Buttons" />

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default buttons</CardTitle>
                  <p className="card-title-desc">
                    Bootstrap includes six predefined button styles, each
                    serving its own semantic purpose.
                  </p>
                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button
                      color="light"
                      className="btn btn-light waves-effect"
                    >
                      Light
                    </Button>{" "}
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      className="btn btn-info waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      className="btn btn-warning waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      className="btn btn-danger waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      className="btn btn-dark waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button color="link" className="btn btn-link waves-effect">
                      Link
                    </Button>{" "}
                    <Button
                      color="secondary"
                      className="btn btn-secondary waves-effect"
                    >
                      Secondary
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Outline buttons</CardTitle>
                  <p className="card-title-desc">
                    Replace the default modifier classes with the{" "}
                    <code className="highlighter-rouge">.btn-outline-*</code>{" "}
                    ones to remove all background images and colors on any
                    button.
                  </p>
                  <div className="button-items">
                    <Button
                      color="primary"
                      outline
                      className="waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button color="light" outline className="waves-effect">
                      Light
                    </Button>{" "}
                    <Button
                      color="success"
                      outline
                      className="waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      outline
                      className="waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      outline
                      className="waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      outline
                      className="waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      outline
                      className="waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button color="secondary" outline className="waves-effect">
                      Secondary
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Rounded buttons</CardTitle>
                  <p className="card-title-desc">
                    Use class <code>.btn-rounded</code> for button round border.
                  </p>
                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button color="light" className="btn-rounded waves-effect">
                      Light
                    </Button>{" "}
                    <Button
                      color="success"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button color="link" className="btn-rounded waves-effect">
                      Link
                    </Button>{" "}
                    <Button
                      color="secondary"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Secondary
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Soft background buttons</CardTitle>
                  <p className="card-title-desc">Add <code>.btn-soft-*</code> class with <code>.btn-*</code> color button for a Soft background buttons.</p>
                  <div className="button-items">
                    <Button color="primary" className="btn-soft-primary waves-effect waves-light">Primary</Button>{" "}
                    <Button color="success" className="btn-soft-success waves-effect waves-light">Success</Button>{" "}
                    <Button color="info" className="btn-soft-info waves-effect waves-light">Info</Button>{" "}
                    <Button color="warning" className="btn-soft-warning waves-effect waves-light">Warning</Button>{" "}
                    <Button color="danger" className="btn-soft-danger waves-effect waves-light">Danger</Button>{" "}
                    <Button color="dark" className="btn-soft-dark waves-effect waves-light">Dark</Button>{" "}
                    <Button color="secondary" className="btn-soft-secondary waves-effect waves-light">Secondary</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Buttons with icon</CardTitle>
                  <p className="card-title-desc">Add icon in button.</p>

                  <div className="button-items">
                    <Button
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Primary{" "}<i className="uil uil-arrow-right ms-2"></i>
                    </Button>{" "}
                    <Button
                      className="btn btn-success waves-effect waves-light"
                    >
                      <i className="uil uil-check me-2"></i>{" "}
                      Success
                    </Button>{" "}
                    <Button
                      className="btn btn-warning waves-effect waves-light"
                    >
                      <i className="uil uil-exclamation-triangle me-2"></i>{" "}
                      Warning
                    </Button>{" "}
                    <Button
                      className="btn btn-danger waves-effect waves-light"
                    >
                      <i className="uil uil-exclamation-octagon me-2"></i>{" "}
                      Danger
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Buttons Sizes</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.btn-lg</code> or <code>.btn-sm</code> for
                    additional sizes.
                  </p>

                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary btn-lg waves-effect waves-light"
                    >
                      Large button
                    </Button>{" "}
                    <Button
                      color="light"
                      className="btn-light btn-lg waves-effect waves-light"
                    >
                      Large button
                    </Button>{" "}
                    <Button
                      color="primary"
                      className="btn btn-primary btn-sm waves-effect waves-light"
                    >
                      Small button
                    </Button>{" "}
                    <Button
                      color="light"
                      className="btn btn-light btn-sm waves-effect waves-light"
                    >
                      Small button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Buttons width</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.w-xs</code>, <code>.w-sm</code>,{" "}
                    <code>.w-md</code> and <code> .w-lg</code> className for
                    additional buttons width.
                  </p>

                  <div className="button-items">
                    <Button
                      type="button"
                      color="primary"
                      className="btn btn-primary w-xs waves-effect waves-light"
                    >
                      Xs
                    </Button>{" "}
                    <Button
                      type="button"
                      color="danger"
                      className="btn btn-danger w-sm waves-effect waves-light"
                    >
                      Small
                    </Button>{" "}
                    <Button
                      type="button"
                      color="warning"
                      className="btn btn-warning w-md waves-effect waves-light"
                    >
                      Medium
                    </Button>{" "}
                    <Button
                      type="button"
                      color="success"
                      className="btn btn-success w-lg waves-effect waves-light"
                    >
                      Large
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Button tags</CardTitle>
                  <p className="card-title-desc">
                    The <code className="highlighter-rouge">.btn</code>
                    classes are designed to be used with the{" "}
                    <code className="highlighter-rouge">
                      &lt;button&gt;
                    </code>{" "}
                    element. However, you can also use these classes on{" "}
                    <code className="highlighter-rouge">&lt;Link&gt;</code> or{" "}
                    <code className="highlighter-rouge">&lt;input&gt;</code>{" "}
                    elements (though some browsers may apply a slightly
                    different rendering).
                  </p>

                  <div className="button-items">
                    <Link
                      className="btn btn-primary waves-effect waves-light"
                      to="#"
                      role="button"
                    >
                      Link
                    </Link>{" "}
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                      type="submit"
                    >
                      Button
                    </Button>{" "}
                    <input
                      className="btn btn-info"
                      type="button"
                      value="Input"
                    />{" "}
                    <input
                      className="btn btn-danger"
                      type="submit"
                      value="Submit"
                    />{" "}
                    <input
                      className="btn btn-warning"
                      type="reset"
                      value="Reset"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Toggle states</CardTitle>
                  <p className="card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="button"
                    </code>
                    to toggle a button’s{" "}
                    <code className="highlighter-rouge">active</code>{" "}
                    state. If you’re pre-toggling a button, you must manually
                    add the <code className="highlighter-rouge">
                      .active
                    </code>{" "}
                    class {" "}
                    <strong>and</strong>{" "}
                    <code className="highlighter-rouge">
                      aria-pressed="true"
                    </code>{" "}
                    to the
                    <code className="highlighter-rouge">&lt;button&gt;</code>.
                  </p>

                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="button"
                      aria-pressed="false"
                    >
                      Single toggle
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Block Buttons</CardTitle>
                  <p className="card-title-desc">
                    Create block level buttons—those that span the full width of
                    a parent—by adding{" "}
                    <code className="highlighter-rouge">.btn-block</code>.
                  </p>

                  <div className="d-grid gap-2">
                    <Button
                      color="primary"
                      className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-1"
                    >
                      Block level button
                    </Button>
                    <Button
                      color="light"
                      className="btn btn-light btn-sm btn-block waves-effect waves-light"
                    >
                      Block level button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Checkbox & Radio Buttons</CardTitle>
                  <p className="card-title-desc">
                    Bootstrap’s{" "}
                    <code className="highlighter-rouge">.button</code> styles
                    can be applied to other elements, such as{" "}
                    <code className="highlighter-rouge">&lt;label&gt;</code>s,
                    to provide checkbox or radio style button toggling. Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="buttons"
                    </code>{" "}
                    to a<code className="highlighter-rouge">.btn-group</code>{" "}
                    containing those modified buttons to enable toggling in
                    their respective styles.
                  </p>

                  <Row>
                    <Col xl={6}>
                      <div
                        className="btn-group"
                        data-toggle="buttons"
                      >
                        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" defaultChecked />
                        <label className="btn btn-primary" htmlFor="btncheck1">Checkbox 1</label>

                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                        <label className="btn btn-primary" htmlFor="btncheck2">Checkbox 2</label>

                        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                        <label className="btn btn-primary" htmlFor="btncheck3">Checkbox 3</label>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-light" htmlFor="btnradio1">Radio 1</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-light" htmlFor="btnradio2">Radio 2</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-light" htmlFor="btnradio3">Radio 3</label>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Button group</CardTitle>
                  <p className="card-title-desc">
                    Wrap a series of buttons with{" "}
                    <code className="highlighter-rouge">.btn</code> in{" "}
                    <code className="highlighter-rouge">.btn-group</code>.
                  </p>

                  <Row>
                    <Col md={6}>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <Button color="primary">Left</Button>
                        <Button color="primary">Middle</Button>
                        <Button color="primary">Right</Button>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div
                        className="btn-group mt-4 mt-md-0"
                        role="group"
                        aria-label="Basic example"
                      >
                        <Button type="button" color="light" className="btn btn-light">
                          <i className="uil uil-align-left"></i>
                        </Button>
                        <Button type="button" color="light" className="btn btn-light">
                          <i className="uil uil-align-center-alt"></i>
                        </Button>
                        <Button type="button" color="light" className="btn btn-light">
                          <i className="uil uil-align-right"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Button toolbar</CardTitle>
                  <p className="card-title-desc">
                    Combine sets of button groups into button toolbars for more
                    complex components. Use utility className as needed to
                    space out groups, buttons, and more.
                  </p>

                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="First group"
                    >
                      <Button color="light" className="btn btn-light">
                        1
                      </Button>
                      <Button color="light" className="btn btn-light">
                        2
                      </Button>
                      <Button color="light" className="btn btn-light">
                        3
                      </Button>
                      <Button color="light" className="btn btn-light">
                        4
                      </Button>
                    </div>
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <Button color="light" className="btn btn-light">
                        5
                      </Button>
                      <Button color="light" className="btn btn-light">
                        6
                      </Button>
                      <Button color="light" className="btn btn-light">
                        7
                      </Button>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Third group"
                    >
                      <Button color="light" className="btn btn-light">
                        8
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Sizing</CardTitle>
                  <p className="card-title-desc">
                    Instead of applying button sizing classes to every button in
                    a group, just add{" "}
                    <code className="highlighter-rouge">.btn-group-*</code> to
                    each <code className="highlighter-rouge">.btn-group</code>,
                    including each one when nesting multiple groups.
                  </p>

                  <div
                    className="btn-group btn-group-lg"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="primary">Left</Button>
                    <Button color="primary">Middle</Button>
                    <Button color="primary">Right</Button>
                  </div>

                  <br />

                  <div
                    className="btn-group mt-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="light" className="btn btn-light">
                      Left
                    </Button>
                    <Button color="light" className="btn btn-light">
                      Middle
                    </Button>
                    <Button color="light" className="btn btn-light">
                      Right
                    </Button>
                  </div>

                  <br />

                  <div
                    className="btn-group btn-group-sm mt-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="danger">Left</Button>
                    <Button color="danger">Middle</Button>
                    <Button color="danger">Right</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Vertical variation</CardTitle>
                  <p className="card-title-desc">
                    Make a set of buttons appear vertically stacked rather than
                    horizontally. Split button dropdowns are not supported here.
                  </p>

                  <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Vertical button group"
                  >
                    <Button
                      type="button"
                      color="light"
                      className="btn btn-light"
                    >
                      Button
                    </Button>

                    <ButtonDropdown
                      isOpen={drp_link}
                      toggle={() => {
                        setdrp_link(!drp_link)
                      }}
                    >
                      <DropdownToggle caret color="light">
                        Dropdown <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Dropdown link</DropdownItem>
                        <DropdownItem>Dropdown link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <Button
                      color="light"
                      type="button"
                      className="btn btn-light"
                    >
                      Button
                    </Button>
                    <Button
                      color="light"
                      type="button"
                      className="btn btn-light"
                    >
                      Button
                    </Button>
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

export default UiButtons
