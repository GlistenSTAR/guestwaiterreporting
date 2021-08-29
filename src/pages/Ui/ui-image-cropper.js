import React, { Component } from "react"
import {
  Card,
  Row,
  Col,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  UncontrolledTooltip,
  ButtonGroup,
} from "reactstrap"
import { Link } from "react-router-dom"

//Image Cropper
import Cropper from "react-cropper"
import "cropperjs/dist/cropper.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Image
import src from "../../assets/images/small/img-5.jpg"

class UiImageCropper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src,
      cropResult: null,
      ratio1: 16,
      ratio2: 9,
      zoom: 0.5,
      dragMode: "crop",
      moveX: 0,
      moveY: 0,
      rotate: 0,
      scaleX: 1,
      scaleY: 1,
      enable: true,
      disable: false,
      modal_1: false,
      modal_2: false,
      modal_3: false,
      imgWidth: "",
      imgHeight: "",
      viewMode: 0,
    }
    this.cropImage = this.cropImage.bind(this)
    this.onChange = this.onChange.bind(this)
    this.useDefaultImage = this.useDefaultImage.bind(this)
    this.changeRatio.bind(this)
    this.tog_1 = this.tog_1.bind(this)
  }

  tog_1() {
    this.setState(prevState => ({
      modal_1: !prevState.modal_1,
    }))
  }

  onChange(e) {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload = () => {
      this.setState({ src: reader.result })
    }
    reader.readAsDataURL(files[0])
  }

  cropImage(width, height) {
    if (typeof this.cropper.getCroppedCanvas() === "undefined") {
      return
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    })

    this.setState({
      imgWidth: width,
      imgHeight: height,
    })
    this.tog_1()
  }

  useDefaultImage() {
    this.setState({ src })
  }

  changeRatio(e, r1, r2) {
    if (e.target.checked) {
      this.setState({ ratio1: r1, ratio2: r2 })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">
            <Breadcrumbs title="UI Elements" breadcrumbItem="Image Cropper" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Example</h4>
                    <Row>
                      <Col xl="9">
                        <div className="img-container mb-2">
                          <Cropper
                            style={{ height: 400, width: "100%" }}
                            aspectRatio={this.state.ratio1 / this.state.ratio2}
                            preview=".img-preview"
                            guides={true}
                            src={this.state.src}
                            ref={cropper => {
                              this.cropper = cropper
                            }}
                            zoomTo={this.state.zoom}
                            dragMode={this.state.dragMode}
                            moveTo={[this.state.moveX, this.state.moveY]}
                            rotateTo={this.state.rotate}
                            scaleX={this.state.scaleX}
                            scaleY={this.state.scaleY}
                            enable={this.state.enable}
                            disable={this.state.disable}
                            viewMode={this.state.viewMode}
                          />
                        </div>
                      </Col>
                      <Col xl="3">
                        <div className="docs-preview image-crop-preview clearfix">
                          <div className="img-preview preview-lg"/>
                          <div className="img-preview preview-md"/>
                          <div className="img-preview preview-sm"/>
                          <div className="img-preview preview-xs"/>
                        </div>
                        <div className="docs-toggles">
                          <div className="img-crop-preview-toggles mt-4 mt-xl-2">
                            <div
                              className="btn-group d-flex flex-nowrap"
                              data-toggle="buttons"
                            >
                              <Label
                                className={
                                  this.state.ratio1 === 16 &&
                                  this.state.ratio2 === 9
                                    ? "btn btn-primary active"
                                    : "btn btn-primary"
                                }
                              >
                                <input
                                  type="radio"
                                  className="sr-only"
                                  id="aspectRatio1"
                                  name="aspectRatio"
                                  onChange={e => {
                                    this.changeRatio(e, 16, 9)
                                  }}
                                />
                                <span
                                  className="docs-tooltip"
                                  id="aspectRatio1T"
                                >
                                  16:9
                                </span>
                                <UncontrolledTooltip
                                  placement="top"
                                  target="aspectRatio1T"
                                >
                                  aspectRatio: 16 / 9
                                </UncontrolledTooltip>
                              </Label>
                              <Label
                                className={
                                  this.state.ratio1 === 4 &&
                                  this.state.ratio2 === 3
                                    ? "btn btn-primary active"
                                    : "btn btn-primary"
                                }
                              >
                                <input
                                  type="radio"
                                  className="sr-only"
                                  id="aspectRatio2"
                                  name="aspectRatio"
                                  onChange={e => {
                                    this.changeRatio(e, 4, 3)
                                  }}
                                />
                                <span
                                  className="docs-tooltip"
                                  id="aspectRatio2T"
                                >
                                  4:3
                                </span>
                                <UncontrolledTooltip
                                  placement="top"
                                  target="aspectRatio2T"
                                >
                                  aspectRatio: 4 / 3
                                </UncontrolledTooltip>
                              </Label>
                              <Label
                                className={
                                  this.state.ratio1 === 1 &&
                                  this.state.ratio2 === 1
                                    ? "btn btn-primary active"
                                    : "btn btn-primary"
                                }
                              >
                                <input
                                  type="radio"
                                  className="sr-only"
                                  id="aspectRatio3"
                                  name="aspectRatio"
                                  value="1"
                                  onChange={e => {
                                    this.changeRatio(e, 1, 1)
                                  }}
                                />
                                <span
                                  className="docs-tooltip"
                                  id="aspectRatio3T"
                                >
                                  1:1
                                </span>
                                <UncontrolledTooltip
                                  placement="top"
                                  target="aspectRatio3T"
                                >
                                  aspectRatio: 1 / 1
                                </UncontrolledTooltip>
                              </Label>
                              <Label
                                className={
                                  this.state.ratio1 === 2 &&
                                  this.state.ratio2 === 3
                                    ? "btn btn-primary active"
                                    : "btn btn-primary"
                                }
                              >
                                <input
                                  type="radio"
                                  className="sr-only"
                                  id="aspectRatio4"
                                  name="aspectRatio"
                                  onChange={e => {
                                    this.changeRatio(e, 2, 3)
                                  }}
                                />
                                <span
                                  className="docs-tooltip"
                                  id="aspectRatio4T"
                                >
                                  2:3
                                </span>
                                <UncontrolledTooltip
                                  placement="top"
                                  target="aspectRatio4T"
                                >
                                  aspectRatio: 2 / 3
                                </UncontrolledTooltip>
                              </Label>
                              <Label
                                className={
                                  this.state.ratio1 === "" &&
                                  this.state.ratio2 === ""
                                    ? "btn btn-primary active"
                                    : "btn btn-primary"
                                }
                              >
                                <input
                                  type="radio"
                                  className="sr-only"
                                  id="aspectRatio5"
                                  name="aspectRatio"
                                  onChange={e => {
                                    this.changeRatio(e, "", "")
                                  }}
                                />
                                <span
                                  className="docs-tooltip"
                                  id="aspectRatio5T"
                                >
                                  Free
                                </span>
                                <UncontrolledTooltip
                                  placement="top"
                                  target="aspectRatio5T"
                                >
                                  aspectRatio: NaN
                                </UncontrolledTooltip>
                              </Label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row id="actions">
                      <Col
                        xl="9"
                        className="img-crop-preview-btns docs-buttons"
                      >
                        <div className="button-items mt-2">
                          <ButtonGroup>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.setState({ dragMode: "move" })
                              }}
                            >
                              <span className="docs-tooltip" id="dragMode1">
                                <span className="mdi mdi-arrow-all"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="dragMode1"
                              >
                                dragMode("move")
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.setState({ dragMode: "crop" })
                              }}
                            >
                              <span className="docs-tooltip" id="dragMode2">
                                <span className="mdi mdi-crop"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="dragMode2"
                              >
                                dragMode("crop")
                              </UncontrolledTooltip>
                            </Button>
                          </ButtonGroup>

                          <ButtonGroup>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                this.setState({ zoom: this.state.zoom + 0.1 })
                              }
                            >
                              <span className="docs-tooltip" id="zoom1">
                                <span className="mdi mdi-magnify-plus-outline"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="zoom1"
                              >
                                zoomTo(0.1)
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                this.setState({ zoom: this.state.zoom - 0.1 })
                              }
                            >
                              <span className="docs-tooltip" id="zoom2">
                                <span className="mdi mdi-magnify-minus-outline"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="zoom2"
                              >
                                zoomTo(-0.1)
                              </UncontrolledTooltip>
                            </Button>
                          </ButtonGroup>

                          <ButtonGroup>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.setState({
                                  moveX: this.state.moveX - 10,
                                  moveY: this.state.moveY,
                                })
                              }}
                              title="Move Left"
                            >
                              <span className="docs-tooltip" id="move1">
                                <span className="mdi mdi-arrow-left"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="move1"
                              >
                                moveTo(-10, 0)
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.setState({
                                  moveX: this.state.moveX + 10,
                                  moveY: this.state.moveY,
                                })
                              }}
                              title="Move Right"
                            >
                              <span className="docs-tooltip" id="move2">
                                <span className="mdi mdi-arrow-right"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="move2"
                              >
                                moveTo(10, 0)
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.setState({
                                  moveX: this.state.moveX,
                                  moveY: this.state.moveY - 10,
                                })
                              }}
                            >
                              <span className="docs-tooltip" id="move3">
                                <span className="mdi mdi-arrow-up"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="move3"
                              >
                                moveTo(0, -10)
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.setState({
                                  moveX: this.state.moveX,
                                  moveY: this.state.moveY + 10,
                                })
                              }}
                            >
                              <span className="docs-tooltip" id="move4">
                                <span className="mdi mdi-arrow-down"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="move4"
                              >
                                moveTo(0, 10)
                              </UncontrolledTooltip>
                            </Button>
                          </ButtonGroup>

                          <ButtonGroup>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                this.setState({
                                  rotate: this.state.rotate - 45,
                                })
                              }
                              title="Rotate Left"
                            >
                              <span className="docs-tooltip" id="rotate1">
                                <span className="mdi mdi-rotate-left"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="rotate1"
                              >
                                rotate(-45)
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                this.setState({
                                  rotate: this.state.rotate + 45,
                                })
                              }
                              title="Rotate Right"
                            >
                              <span className="docs-tooltip" id="rotate2">
                                <span className="mdi mdi-rotate-right"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="rotate2"
                              >
                                rotate(45)
                              </UncontrolledTooltip>
                            </Button>
                          </ButtonGroup>

                          <ButtonGroup>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.state.scaleX === 1
                                  ? this.setState({ scaleX: -1 })
                                  : this.setState({ scaleX: 1 })
                              }}
                              title="Flip Horizontal"
                            >
                              <span className="docs-tooltip" id="scale1">
                                <span className="mdi mdi-arrow-left-right"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="scale1"
                              >
                                scaleX(-1)
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() => {
                                this.state.scaleY === 1
                                  ? this.setState({ scaleY: -1 })
                                  : this.setState({ scaleY: 1 })
                              }}
                              title="Flip Vertical"
                            >
                              <span className="docs-tooltip" id="scale2">
                                <span className="mdi mdi-arrow-up-down"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="scale1"
                              >
                                scaleY(-1)
                              </UncontrolledTooltip>
                            </Button>
                          </ButtonGroup>

                          <ButtonGroup>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                this.setState({ enable: false, disable: true })
                              }
                              title="Disable"
                            >
                              <span className="docs-tooltip" id="disable">
                                <span className="mdi mdi-lock"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="disable"
                              >
                                disable
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                this.setState({ enable: true, disable: false })
                              }
                              title="Enable"
                            >
                              <span className="docs-tooltip" id="enable">
                                <span className="mdi mdi-lock-open"/>
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="enable"
                              >
                                enable
                              </UncontrolledTooltip>
                            </Button>
                          </ButtonGroup>

                          <Label
                            className="btn btn-primary btn-upload"
                            htmlFor="inputImage"
                            title="Upload image file"
                          >
                            <input
                              type="file"
                              className="sr-only"
                              id="inputImage"
                              name="file"
                              accept="image/*"
                              onChange={this.onChange}
                            />
                            <span className="docs-tooltip" id="uploadImage">
                              <span className="mdi mdi-upload"/>
                            </span>
                            <UncontrolledTooltip
                              placement="top"
                              target="uploadImage"
                            >
                              Import image with Blob URLs
                            </UncontrolledTooltip>
                          </Label>

                          <div className="btn-group btn-group-crop">
                            <Button
                              type="button"
                              color="success"
                              onClick={() => this.cropImage("", "")}
                            >
                              <span className="docs-tooltip" id="imgResult1">
                                Get Cropped Canvas
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="imgResult1"
                              >
                                getCroppedCanvas( width : NaN, height : NaN )
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="success"
                              onClick={() => this.cropImage(160, 90)}
                            >
                              <span className="docs-tooltip" id="imgResult2">
                                160&times;90
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="imgResult2"
                              >
                                getCroppedCanvas( width : 160, height : 90 )
                              </UncontrolledTooltip>
                            </Button>
                            <Button
                              type="button"
                              color="success"
                              onClick={() => this.cropImage(320, 180)}
                            >
                              <span className="docs-tooltip" id="imgResult3">
                                320&times;180
                              </span>
                              <UncontrolledTooltip
                                placement="top"
                                target="imgResult3"
                              >
                                getCroppedCanvas( width : 320, height : 180 )
                              </UncontrolledTooltip>
                            </Button>
                          </div>

                          <Modal
                            isOpen={this.state.modal_1}
                            toggle={this.tog_1}
                            autoFocus={true}
                          >
                            <ModalHeader toggle={this.tog_1}>
                              Cropped
                            </ModalHeader>
                            <ModalBody>
                              <img
                                style={{ width: "100%" }}
                                src={this.state.cropResult}
                                height={this.state.imgHeight}
                                width={this.state.imgWidth}
                                alt="cropped result"
                              />
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                type="button"
                                color="secondary"
                                onClick={this.tog_1}
                              >
                                Close
                              </Button>
                              <Link to="#" className="btn btn-primary">
                                Download
                              </Link>
                            </ModalFooter>
                          </Modal>

                          <Button
                            type="button"
                            color="secondary"
                            onClick={() => {
                              this.setState({ moveX: 0, moveY: 0 })
                            }}
                          >
                            <span className="docs-tooltip" id="move5">
                              Move to [0,0]
                            </span>
                            <UncontrolledTooltip placement="top" target="move5">
                              moveTo(0)
                            </UncontrolledTooltip>
                          </Button>
                          <Button
                            type="button"
                            color="secondary"
                            onClick={() => this.setState({ zoom: 1 })}
                          >
                            <span className="docs-tooltip" id="zoom3">
                              Zoom to 100%
                            </span>
                            <UncontrolledTooltip placement="top" target="zoom3">
                              zoomTo(1)
                            </UncontrolledTooltip>
                          </Button>
                          <Button
                            type="button"
                            color="secondary"
                            onClick={() => this.setState({ rotate: 180 })}
                          >
                            <span className="docs-tooltip" id="rotate3">
                              Rotate 180°
                            </span>
                            <UncontrolledTooltip
                              placement="top"
                              target="rotate3"
                            >
                              rotate(180)
                            </UncontrolledTooltip>
                          </Button>
                          <Button
                            type="button"
                            color="secondary"
                            onClick={() => {
                              this.setState({ scaleX: -2, scaleY: -1 })
                            }}
                          >
                            <span className="docs-tooltip" id="scale3">
                              Scale (-2, -1)
                            </span>
                            <UncontrolledTooltip
                              placement="top"
                              target="scale3"
                            >
                              scale(-2, -1)
                            </UncontrolledTooltip>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UiImageCropper
