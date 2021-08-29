import React, { useState } from "react"

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
} from "reactstrap"
import { Link } from "react-router-dom"

//Lightbox
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

// import image
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
import img6 from "../../assets/images/small/img-6.jpg"
import img7 from "../../assets/images/small/img-7.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const images = [img1, img2, img3, img4, img5, img6]

const UiLightbox = () => {
  const [photoIndex, setphotoIndex] = useState(0)
  const [isFits, setisFits] = useState(false)
  const [isEffects, setisEffects] = useState(false)
  const [isGallery, setisGallery] = useState(false)
  const [isGalleryZoom, setisGalleryZoom] = useState(false)
  const [isOpen, setisOpen] = useState(false)
  const [isOpen1, setisOpen1] = useState(false)
  const [modal, setmodal] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Lightbox" />

          {isFits ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              enableZoom={false}
              imageCaption={
                "Caption. Can be aligned it to any side and contain any HTML."
              }
              onCloseRequest={() => {
                setisFits(!isFits)
              }}
            />
          ) : null}

          {isEffects ? (
            <Lightbox
              mainSrc={images[3]}
              enableZoom={false}
              onCloseRequest={() => {
                setisEffects(!isEffects)
              }}
            />
          ) : null}

          {isGallery ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              enableZoom={true}
              onCloseRequest={() => {
                setisGallery(false)
              }}
              onMovePrevRequest={() => {
                setphotoIndex((photoIndex + images.length - 1) % images.length)
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % images.length)
              }}
              imageCaption={"Project " + parseFloat(photoIndex + 1)}
            />
          ) : null}

          {isGalleryZoom ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => {
                setisGalleryZoom(false)
              }}
              onMovePrevRequest={() => {
                setphotoIndex((photoIndex + images.length - 1) % images.length)
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % images.length)
              }}
            />
          ) : null}

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Single image lightbox</CardTitle>
                  <p className="card-title-desc">
                    Three simple popups with different scaling settings.
                  </p>
                  <Row>
                    <Col className="col-6">
                      <div>
                        <h5 className="mt-0 font-size-14">
                          Fits (Horz/Vert)
                        </h5>
                        <Link className="image-popup-vertical-fit" to="#">
                          <img
                            onClick={() => {
                              setisFits(true)
                            }}
                            className="img-fluid"
                            alt="Minible"
                            src={img2}
                            width="145"
                          />
                        </Link>
                      </div>
                    </Col>
                    <Col className="col-6">
                      <div>
                        <h5 className="mt-0 font-size-14">Effects</h5>
                        <Link className="image-popup-no-margins" to="#">
                          <img
                            onClick={() => {
                              setisEffects(true)
                            }}
                            className="img-fluid"
                            alt=""
                            src={img3}
                            width="75"
                          />
                        </Link>
                        <p className="mt-2 mb-0 text-muted">No gaps, zoom animation, close icon in top-right corner.</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Lightbox gallery</CardTitle>
                  <p className="card-title-desc mb-1">
                    In this example lazy-loading of images is enabled for the
                    next image based on move direction.{" "}
                  </p>
                  <div className="popup-gallery">
                    <Row>
                      <Col xl={2} md={4} className="col-6">
                        <div className="mt-4">
                          <div className="img-fluid">
                            <img
                              src={img1}
                              onClick={() => {
                                setisGallery(true)
                                setphotoIndex(0)
                              }}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} md={4} className="col-6">
                        <div className="mt-4">
                          <div className="img-fluid">
                            <img
                              src={img2}
                              onClick={() => {
                                setisGallery(true)
                                setphotoIndex(1)
                              }}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} md={4} className="col-6">
                        <div className="mt-4">
                          <div className="img-fluid">
                            <img
                              src={img3}
                              onClick={() => {
                                setisGallery(true)
                                setphotoIndex(2)
                              }}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} md={4} className="col-6">
                        <div className="mt-4">
                          <div className="img-fluid">
                            <img
                              src={img4}
                              onClick={() => {
                                setisGallery(true)
                                setphotoIndex(3)
                              }}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} md={4} className="col-6">
                        <div className="mt-4">
                          <div className="img-fluid">
                            <img
                              src={img5}
                              onClick={() => {
                                setisGallery(true)
                                setphotoIndex(4)
                              }}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} md={4} className="col-6">
                        <div className="mt-4">
                          <div className="img-fluid">
                            <img
                              src={img6}
                              onClick={() => {
                                setisGallery(true)
                                setphotoIndex(5)
                              }}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Zoom Gallery</CardTitle>
                  <p className="card-title-desc">
                    Zoom effect works only with images.
                  </p>

                  <div className="zoom-gallery">
                    <img
                      src={img3}
                      className="float-left"
                      onClick={() => {
                        setisGallery(true)
                        setphotoIndex(2)
                      }}
                      alt=""
                      width="275"
                    />
                    <img
                      src={img7}
                      className="float-left"
                      onClick={() => {
                        setisGallery(true)
                        setphotoIndex(4)
                      }}
                      alt=""
                      width="275"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Popup with video or map</CardTitle>
                  <p className="card-title-desc">
                    In this example lazy-loading of images is enabled for the
                    next image based on move direction.{" "}
                  </p>

                  <Row>
                    <Col>
                      <Button
                        className="btn btn-light"
                        color="light"
                        onClick={() => {
                          setisOpen(!isOpen)
                        }}
                      >
                        Open YouTube Video
                      </Button>{" "}
                      <Button
                        className="btn btn-light"
                        color="light"
                        onClick={() => {
                          setisOpen1(!isOpen1)
                        }}
                      >
                        Open Vimeo Video
                      </Button>{" "}
                      <ModalVideo
                        videoId="L61p2uyiMSo"
                        channel="youtube"
                        isOpen={isOpen}
                        onClose={() => {
                          setisOpen(!isOpen)
                        }}
                      />
                      <ModalVideo
                        videoId="L61p2uyiMSo"
                        channel="youtube"
                        isOpen={isOpen1}
                        onClose={() => {
                          setisOpen1(false)
                        }}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Popup with form</CardTitle>
                  <div>
                    <Link
                      onClick={() => {
                        setmodal(!modal)
                      }}
                      to="#"
                      className="popup-form btn btn-primary"
                    >
                      Popup form
                    </Link>
                  </div>

                  <Modal
                    size="lg"
                    isOpen={modal}
                    toggle={() => {
                      setmodal(!modal)
                    }}
                  >
                    <ModalHeader
                      toggle={() => {
                        setmodal(!modal)
                      }}
                    >
                      Form
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <Row>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter Name"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <div className="mb-3">
                              <label htmlFor="subject">Subject</label>
                              <textarea
                                className="form-control"
                                id="subject"
                                rows="3"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <div className="text-end">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </ModalBody>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiLightbox
