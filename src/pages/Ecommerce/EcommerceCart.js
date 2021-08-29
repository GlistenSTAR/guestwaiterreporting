import React, { useState } from "react"

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Product Images
import img1 from "../../assets/images/product/img-1.png"
import img2 from "../../assets/images/product/img-2.png"
import img3 from "../../assets/images/product/img-3.png"
import img4 from "../../assets/images/product/img-4.png"
import img5 from "../../assets/images/product/img-5.png"
import img6 from "../../assets/images/product/img-6.png"

const productListvar = [
  {
    id: 1,
    img: img1,
    name: "Half sleeve T-shirt",
    color: "Maroon",
    price: "450",
    data_attr: 2,
    total: 900,
  },
  {
    id: 2,
    img: img2,
    name: "Light blue T-shirt",
    color: "Light blue",
    price: "225",
    data_attr: 6,
    total: 225,
  },
  {
    id: 3,
    img: img3,
    name: "Black Color T-shirt",
    color: "Black",
    price: "152",
    data_attr: 2,
    total: 304,
  },
  {
    id: 4,
    img: img4,
    name: "Hoodie (Blue)",
    color: "Blue",
    price: "145",
    data_attr: 2,
    total: 290,
  },
  {
    id: 5,
    img: img5,
    name: "Half sleeve T-Shirt",
    color: "Light orange",
    price: "138",
    data_attr: 8,
    total: 138,
  },
  {
    id: 6,
    img: img6,
    name: "Green color T-shirt",
    color: "Green",
    price: "152",
    data_attr: 2,
    total: 304,
  },
]

const EcommerceCart = () => {
  const [productList, setproductList] = useState(productListvar)

  function countUP(id, prev_data_attr) {
    setproductList(
      productList.map(p =>
        p.id === id ? { ...p, data_attr: prev_data_attr + 1 } : p
      )
    )
  }

  function countDown(id, prev_data_attr) {
    setproductList(
      productList.map(p =>
        p.id === id ? { ...p, data_attr: prev_data_attr - 1 } : p
      )
    )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Cart" />

          <Row>
            <Col xl="8">
              {productList.map(product => (
                <Card className="border shadow-none" key={product.id}>
                  <CardBody>

                    <div className="d-flex border-bottom pb-3">
                      <div className="me-4">
                        <img src={product.img} alt="" className="avatar-lg" />
                      </div>
                      <div className="flex-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-16">
                            <Link
                              to={"/ecommerce-product-detail/" + product.id}
                              className="text-dark"
                            >
                              {product.name}
                            </Link>
                          </h5>
                          <p className="mb-1">Color : <span className="fw-medium">{product.color}</span></p>
                          <p>Size : <span className="fw-medium">08</span></p>
                        </div>
                      </div>
                      <div className="ml-2">
                        <ul className="list-inline mb-0 font-size-16">
                          <li className="list-inline-item">
                            <Link to="#" className="text-muted px-2">
                              <i className="uil uil-trash-alt"></i>
                            </Link>{" "}
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link to="#" className="text-muted px-2">
                              <i className="uil uil-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Price</p>
                            <h5 className="font-size-16">${product.price}</h5>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Quantity</p>
                            <div style={{ width: "110px" }}>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <Button
                                    color="primary"
                                    onClick={() => {
                                      countUP(product.id, product.data_attr)
                                    }}
                                  >
                                    +
                                    </Button>
                                </InputGroupAddon>
                                <Input
                                  type="text"
                                  value={product.data_attr}
                                  name="demo_vertical"
                                  readOnly
                                />
                                <InputGroupAddon addonType="append">
                                  <Button
                                    color="primary"
                                    onClick={() => {
                                      countDown(product.id, product.data_attr)
                                    }}
                                  >
                                    -
                                    </Button>
                                </InputGroupAddon>
                              </InputGroup>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="text-muted mb-2">Total</p>
                            <h5 className="font-size-16">${product.total}</h5>
                          </div>
                        </div>
                      </div>
                    </div>

                  </CardBody>
                </Card>
              ))}
            </Col>
            <Col xl="4">
              <div className="mt-5 mt-lg-0">
                <Card className="border shadow-none">
                  <div className="card-header bg-transparent border-bottom py-3 px-4">
                    <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#MN0124</span></h5>
                  </div>
                  <CardBody className="p-4">
                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>Sub Total :</td>
                            <td className="text-end">$ 780</td>
                          </tr>
                          <tr>
                            <td>Discount : </td>
                            <td className="text-end">- $ 78</td>
                          </tr>
                          <tr>
                            <td>Shipping Charge :</td>
                            <td className="text-end">$ 25</td>
                          </tr>
                          <tr>
                            <td>Estimated Tax : </td>
                            <td className="text-end">$ 18.20</td>
                          </tr>
                          <tr className="bg-light">
                            <th>Total :</th>
                            <td className="text-end">
                              <span className="fw-bold">
                                $ 745.2
                            </span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EcommerceCart
