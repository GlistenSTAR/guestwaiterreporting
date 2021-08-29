import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  Col,
  Container,
  Form,
  Media,
  Input,
  Label,
  Row,
  Collapse
} from "reactstrap"
import Select from "react-select"
import Dropzone from "react-dropzone"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const EcommerceAddProduct = () => {
  const [selectedFiles, setselectedFiles] = useState([])
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const [isOpenAddproduct, setIsOpenAddproduct] = useState(false);

  const toggleAddproduct = () => setIsOpenAddproduct(!isOpenAddproduct);

  const [isOpenMetadata, setIsOpenMetadata] = useState(false);

  const toggleMetadata = () => setIsOpenMetadata(!isOpenMetadata);

  const options = [
    { value: "AK", label: "Alaska" },
    { value: "HI", label: "Hawaii" },
    { value: "CA", label: "California" },
    { value: "NV", label: "Nevada" },
    { value: "OR", label: "Oregon" },
    { value: "WA", label: "Washington" }
  ]

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size)
      })
    )

    setselectedFiles(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Product" />

          <Row>
            <Col lg="12">
              <div id="addproduct-accordion" className="custom-accordion">
                <Card>
                  <Link to="#" onClick={toggle} className="text-dark">
                    <div className="p-4">

                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              01
                                                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Billing Info</h5>
                          <p className="text-muted text-truncate mb-0">Fill all information below</p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>

                    </div>
                  </Link>
                  <Collapse isOpen={isOpen}>
                    <div className="p-4 border-top">
                      <Form>
                        <div className="mb-3">
                          <Label htmlFor="productname">Product Name</Label>
                          <Input
                            id="productname"
                            name="productname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <Row>
                          <Col lg="4">
                            <div className="mb-3">
                              <Label htmlFor="manufacturername">
                                Manufacturer Name
                          </Label>
                              <Input
                                id="manufacturername"
                                name="manufacturername"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </Col>
                          <Col lg="4">
                            <div className="mb-3">
                              <Label htmlFor="manufacturerbrand">
                                Manufacturer Brand
                          </Label>
                              <Input
                                id="manufacturerbrand"
                                name="manufacturerbrand"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </Col>

                          <Col lg="4">
                            <div className="mb-3">
                              <Label htmlFor="price">Price</Label>
                              <Input
                                id="price"
                                name="price"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <div className="mb-3">
                              <Label className="control-label">Category</Label>
                              <select className="form-control select2">
                                <option>Select</option>
                                <option value="AK">Alaska</option>
                                <option value="HI">Hawaii</option>
                              </select>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="mb-3">
                              <Label className="control-label">Specifications</Label>
                              <Select
                                classNamePrefix="select2-selection"
                                placeholder="Choose..."
                                title="Country"
                                options={options}
                                isMulti
                              />
                            </div>
                          </Col>
                        </Row>
                        <div className="mb-0">
                          <Label htmlFor="productdesc">
                            Product Description
                          </Label>
                          <textarea
                            className="form-control"
                            id="productdesc"
                            rows="4"
                          />
                        </div>

                      </Form>
                    </div>
                  </Collapse>
                </Card>
                <Card>
                  <Link to="#" className="text-dark collapsed" onClick={toggleAddproduct}>
                    <div className="p-4">

                      <Media className="d-flex align-items-center">
                        <div className="me-3">
                          <div className="avatar-xs">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              02
                                                            </div>
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Product Image</h5>
                          <p className="text-muted text-truncate mb-0">Fill all information below</p>
                        </div>
                        <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                      </Media>

                    </div>
                  </Link>
                  <Collapse isOpen={isOpenAddproduct}>
                    <div className="p-4 border-top">
                      <Form>
                        <Dropzone
                          onDrop={acceptedFiles => {
                            handleAcceptedFiles(acceptedFiles)
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="dropzone">
                              <div
                                className="dz-message needsclick"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="dz-message needsclick">
                                  <div className="mb-3">
                                    <i className="display-4 text-muted uil uil-cloud-upload"></i>
                                  </div>
                                  <h4>Drop files here or click to upload.</h4>
                                </div>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div className="dropzone-previews mt-3" id="file-previews">
                          {selectedFiles.map((f, i) => {
                            return (
                              <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={i + "-file"}
                              >
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <img
                                        data-dz-thumbnail=""
                                        height="80"
                                        className="avatar-sm rounded bg-light"
                                        alt={f.name}
                                        src={f.preview}
                                      />
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {f.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{f.formattedSize}</strong>
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            )
                          })}
                        </div>
                      </Form>
                    </div>
                  </Collapse>
                </Card>
              </div>

              <Card>
                <Link to="#" className="text-dark collapsed" onClick={toggleMetadata}>
                  <div className="p-4">

                    <Media className="d-flex align-items-center">
                      <div className="me-3">
                        <div className="avatar-xs">
                          <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                            03
                                                            </div>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="font-size-16 mb-1">Meta Data</h5>
                        <p className="text-muted text-truncate mb-0">Fill all information below</p>
                      </div>
                      <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                    </Media>
                  </div>
                </Link>
                <Collapse isOpen={isOpenMetadata}>
                  <div className="p-4 border-top">
                    <Form>
                      <Row>
                        <Col sm={6}>
                          <div className="mb-3">
                            <Label htmlFor="metatitle">Meta title</Label>
                            <Input
                              id="metatitle"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="mb-3">
                            <Label htmlFor="metakeywords">Meta Keywords</Label>
                            <Input
                              id="metakeywords"
                              name="manufacturername"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="mb-0">
                        <Label htmlFor="metadescription">
                          Meta Description
                          </Label>
                        <textarea
                          className="form-control"
                          id="metadescription"
                          rows="5"
                        />
                      </div>
                    </Form>

                  </div>
                </Collapse>
              </Card>
            </Col>
          </Row>
          <Row className="row mb-4">
            <div className="col text-end">
              <Link to="#" className="btn btn-danger"> <i className="uil uil-times me-1"></i> Cancel </Link>{" "}
              <Link to="#" className="btn btn-success"> <i className="uil uil-file-alt me-1"></i> Save </Link>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EcommerceAddProduct
