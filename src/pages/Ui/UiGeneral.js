import React, { useState } from "react"
import {
  Button,
  Popover,
  PopoverBody,
  Tooltip,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Container,
  Spinner,
  Badge,
  UncontrolledPopover,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiGeneral = () => {
  const [popovertop, setpopovertop] = useState(false)
  const [popoverleft, setpopoverleft] = useState(false)
  const [popoverright, setpopoverright] = useState(false)
  const [popoverbottom, setpopoverbottom] = useState(false)
  const [popoverdismiss, setpopoverdismiss] = useState(false)

  const [ttop, setttop] = useState(false)
  const [tbottom, settbottom] = useState(false)
  const [tleft, settleft] = useState(false)
  const [tright, settright] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="General" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col xl={6}>
                      <CardTitle className="h4">Badges</CardTitle>
                      <p className="card-title-desc">
                        Add any of the below mentioned modifier classes to
                        change the appearance of a badge.
                      </p>
                      <div>
                        <Badge className="bg-primary">
                          Primary
                        </Badge>{" "}
                        <Badge className="bg-success">
                          Success
                        </Badge>{" "}
                        <Badge className="bg-info">
                          Info
                        </Badge>{" "}
                        <Badge className="bg-warning">
                          Warning
                        </Badge>{" "}
                        <Badge className="bg-danger">
                          Danger
                        </Badge>{" "}
                        <Badge className="bg-dark">
                          Dark
                        </Badge>{" "}
                      </div>

                      <div className="mt-1">
                        <Badge pill className="bg-soft-primary">
                          Primary
                        </Badge>{" "}
                        <Badge pill className="bg-soft-success">
                          Success
                        </Badge>{" "}
                        <Badge pill className="bg-soft-info">
                          Info
                        </Badge>{" "}
                        <Badge pill className="bg-soft-warning">
                          Warning
                        </Badge>{" "}
                        <Badge pill className="bg-soft-danger">
                          Danger
                        </Badge>{" "}
                        <Badge pill className="bg-soft-dark">
                          Dark
                        </Badge>{" "}
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="mt-4 mt-xl-0">
                        <CardTitle className="h4">Pill badges</CardTitle>
                        <p className="card-title-desc">
                          Use the <code>.rounded-pill</code> modifier className to
                        make badges more rounded (with a larger{" "}
                          <code>border-radius</code>
                        and additional horizontal <code>padding</code>). Useful
                        if you miss the badges from v3.
                      </p>

                        <div>
                          <Badge className="rounded-pill bg-primary">
                            Primary
                        </Badge>{" "}
                          <Badge className="rounded-pill bg-success">
                            Success
                        </Badge>{" "}
                          <Badge className="rounded-pill bg-info">
                            Info
                        </Badge>{" "}
                          <Badge className="rounded-pill bg-warning">
                            Warning
                        </Badge>{" "}
                          <Badge className="rounded-pill bg-danger">
                            Danger
                        </Badge>{" "}
                          <Badge className="rounded-pill bg-dark">
                            Dark
                        </Badge>{" "}
                        </div>

                        <div className="mt-1">
                          <Badge pill className="rounded-pill bg-soft-primary">
                            Primary
                        </Badge>{" "}
                          <Badge pill className="rounded-pill bg-soft-success">
                            Success
                        </Badge>{" "}
                          <Badge pill className="rounded-pill bg-soft-info">
                            Info
                        </Badge>{" "}
                          <Badge pill className="rounded-pill bg-soft-warning">
                            Warning
                        </Badge>{" "}
                          <Badge pill className="rounded-pill bg-soft-danger">
                            Danger
                        </Badge>{" "}
                          <Badge pill className="rounded-pill bg-soft-dark">
                            Dark
                        </Badge>{" "}
                        </div>
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
                  <CardTitle className="h4">Popovers</CardTitle>
                  <p className="card-title-desc">
                    Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using Bootstrap in RTL.
                  </p>
                  <div className="button-items">
                    <Button
                      id="Popovertop"
                      color="light"
                      className="waves-effect"
                      onClick={() => {
                        setpopovertop(!popovertop)
                      }}
                    >
                      Popover on top
                    </Button>{" "}
                    <Popover
                      placement="top"
                      isOpen={popovertop}
                      target="Popovertop"
                      toggle={() => {
                        setpopovertop(!popovertop)
                      }}
                    >
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </Popover>{" "}
                    <Button
                      id="Popoverright"
                      onClick={() => {
                        setpopoverright(!popoverright)
                      }}
                      color="light"
                      className="waves-effect"
                    >
                      Popover on right
                    </Button>{" "}
                    <Popover
                      placement="right"
                      isOpen={popoverright}
                      target="Popoverright"
                      toggle={() => {
                        setpopoverright(!popoverright)
                      }}
                    >
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </Popover>{" "}
                    <Button
                      id="Popoverbottom"
                      onClick={() => {
                        setpopoverbottom(!popoverbottom)
                      }}
                      color="light"
                      className="waves-effect"
                    >
                      Popover on bottom
                    </Button>{" "}
                    <Popover
                      placement="bottom"
                      isOpen={popoverbottom}
                      target="Popoverbottom"
                      toggle={() => {
                        setpopoverbottom(!popoverbottom)
                      }}
                    >
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </Popover>{" "}
                    <Button
                      id="Popoverleft"
                      onClick={() => {
                        setpopoverleft(!popoverleft)
                      }}
                      color="light"
                      className="waves-effect"
                    >
                      Popover on left
                    </Button>{" "}
                    <Popover
                      placement="left"
                      isOpen={popoverleft}
                      target="Popoverleft"
                      toggle={() => {
                        setpopoverleft(!popoverleft)
                      }}
                    >
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </Popover>{" "}
                    <Button
                      id="Popoverdismiss"
                      className="btn btn-success"
                      onClick={() => {
                        setpopoverdismiss(!popoverdismiss)
                      }}
                    >
                      Dismissible popover
                    </Button>{" "}
                    <UncontrolledPopover
                      trigger="focus"
                      target="Popoverdismiss"
                      placement="right"
                    >
                      <PopoverBody>
                        And here's some amazing content. It's very engaging. Right?
                      </PopoverBody>
                    </UncontrolledPopover>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Tooltips</CardTitle>
                  <p className="card-title-desc">
                    Hover over the links below to see tooltips:
                  </p>

                  <div className="button-items">
                    <Tooltip
                      placement="top"
                      isOpen={ttop}
                      target="TooltipTop"
                      toggle={() => {
                        setttop(!ttop)
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="right"
                      isOpen={tright}
                      target="TooltipRight"
                      toggle={() => {
                        settright(!tright)
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      isOpen={tbottom}
                      target="TooltipBottom"
                      toggle={() => {
                        settbottom(!tbottom)
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="left"
                      isOpen={tleft}
                      target="TooltipLeft"
                      toggle={() => {
                        settleft(!tleft)
                      }}
                    >
                      Hello world!
                    </Tooltip>

                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipTop"
                    >
                      {" "}
                      Tooltip on top
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipRight"
                    >
                      {" "}
                      Tooltip on Right
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipBottom"
                    >
                      {" "}
                      Tooltip on Bottom
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipLeft"
                    >
                      {" "}
                      Tooltip on Left
                    </button>{" "}

                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Pagination</CardTitle>
                  <Row>
                    <Col xl={6}>
                      <h5 className="font-size-14">Default Example</h5>
                      <p className="card-title-desc">
                        Pagination links indicate a series of related content
                        exists across multiple pages.
                      </p>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink href="#">Previous</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink href="#" previous>
                            <i className="mdi mdi-chevron-left" />
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink next>
                            <i className="mdi mdi-chevron-right" />
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>

                    <Col xl={6}>
                      <h5 className="font-size-14">Disabled and active states</h5>
                      <p className="card-title-desc">
                        Pagination links are customizable for different
                        circumstances. Use <code>.disabled</code> for links that
                        appear un-clickable and <code>.active</code> to indicate
                        the current page.
                      </p>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink href="#">
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled>
                          <PaginationLink>
                            <i className="mdi mdi-chevron-left" />
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink>
                            2<span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">
                            <i className="mdi mdi-chevron-right" />
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">Sizing</h5>
                        <p className="card-title-desc">
                          Fancy larger or smaller pagination? Add{" "}
                          <code>.pagination-lg</code> or{" "}
                          <code>.pagination-sm</code> for additional sizes.
                      </p>

                        <Pagination
                          size="lg"
                          aria-label="Page navigation example"
                        >
                          <PaginationItem disabled>
                            <PaginationLink href="#" tabIndex="-1">
                              Previous
                          </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">Next</PaginationLink>
                          </PaginationItem>
                        </Pagination>

                        <Pagination
                          size="sm"
                          aria-label="Page navigation example"
                        >
                          <PaginationItem disabled>
                            <PaginationLink href="#" tabIndex="-1">
                              Previous
                          </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">Next</PaginationLink>
                          </PaginationItem>
                        </Pagination>
                      </div>
                    </Col>

                    <Col xl={6}>
                      <div className="mt-4">
                        <h5 className="card-title">Alignment</h5>
                        <p className="card-title-desc">
                          Change the alignment of pagination components with
                          flexbox utilities.
                      </p>

                        <Pagination
                          aria-label="Page navigation example"
                          listClassName="justify-content-center"
                        >
                          <PaginationItem disabled>
                            <PaginationLink href="#" tabIndex="-1">
                              Previous
                          </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">Next</PaginationLink>
                          </PaginationItem>
                        </Pagination>

                        <Pagination
                          aria-label="Page navigation example"
                          listClassName="justify-content-end"
                        >
                          <PaginationItem disabled>
                            <PaginationLink href="#" tabIndex="-1">
                              Previous
                          </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">Next</PaginationLink>
                          </PaginationItem>
                        </Pagination>
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
                  <CardTitle className="h4">Border spinner</CardTitle>
                  <p className="card-title-desc">
                    Use the border spinners for a lightweight loading indicator.
                  </p>
                  <div>
                    <Spinner className="m-1" color="primary" />
                    <Spinner className="m-1" color="secondary" />
                    <Spinner className="m-1" color="success" />
                    <Spinner className="m-1" color="danger" />
                    <Spinner className="m-1" color="warning" />
                    <Spinner className="m-1" color="info" />
                    <Spinner className="m-1" color="light" />
                    <Spinner className="m-1" color="dark" />
                  </div>
                </CardBody>{" "}
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Growing spinner</CardTitle>
                  <p className="card-title-desc">
                    If you don’t fancy a border spinner, switch to the grow
                    spinner. While it doesn’t technically spin, it does
                    repeatedly grow!
                  </p>
                  <div>
                    <Spinner type="grow" className="m-1" color="primary" />
                    <Spinner type="grow" className="m-1" color="secondary" />
                    <Spinner type="grow" className="m-1" color="success" />
                    <Spinner type="grow" className="m-1" color="danger" />
                    <Spinner type="grow" className="m-1" color="warning" />
                    <Spinner type="grow" className="m-1" color="info" />
                    <Spinner type="grow" className="m-1" color="light" />
                    <Spinner type="grow" className="m-1" color="dark" />
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

export default UiGeneral
