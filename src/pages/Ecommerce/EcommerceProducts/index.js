import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Collapse,
  Media,
  Row,
} from "reactstrap"

import { isEmpty, map } from "lodash"

// RangeSlider
import Nouislider from "nouislider-react"
import "nouislider/distribute/nouislider.css"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//Import data
import { discountData, productsData, colorData } from "../../../common/data"

//Import actions
import { getProducts } from "../../../store/e-commerce/actions"

const EcommerceProducts = props => {
  const { products, history, onGetProducts } = props
  // eslint-disable-next-line no-unused-vars
  const [FilterClothes, setFilterClothes] = useState([
    { id: 1, name: "T-shirts", link: "#" },
    { id: 2, name: "Shirts", link: "#" },
    { id: 3, name: "Jeans", link: "#" },
    { id: 4, name: "Jackets", link: "#" },
  ])

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const [isFilterSizesOpen, setIsFilterSizesOpen] = useState(true);

  const filtersizestoggle = () => setIsFilterSizesOpen(!isFilterSizesOpen);

  const [isFilterProductColorOpen, setIsFilterColorsOpen] = useState(true);

  const filtercolorstoggle = () => setIsFilterColorsOpen(!isFilterProductColorOpen);

  const [isFilterProductRatingOpen, setIsFilterRatingsOpen] = useState(true);

  const filterratingtoggle = () => setIsFilterRatingsOpen(!isFilterProductRatingOpen);

  const [isFilterProductDiscountOpen, setIsFilterDiscountOpen] = useState(false);

  const filterdiscountstoggle = () => setIsFilterDiscountOpen(!isFilterProductDiscountOpen);

  const [productList, setProductList] = useState([])

  // eslint-disable-next-line no-unused-vars
  const [discountDataList, setDiscountDataList] = useState([])

  const [filters, setFilters] = useState({
    discount: [],
    color: [],
    price: { min: 0, max: 500 },
  })
  const [page, setPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [totalPage, setTotalPage] = useState(5)

  useEffect(() => {
    setProductList(products)
    onGetProducts()
    setDiscountDataList(discountData)
  }, [onGetProducts,products])

  useEffect(() => {
    if (!isEmpty(products)) setProductList(products)
  }, [products])

  // const onSelectColor = e => {
  //   const { value } = e.target
  //   const { color } = filters
  //   console.log(value)
  //   setFilters({
  //     ...filters,
  //     color: color.find(item => item === value)
  //       ? color.filter(item => item !== value)
  //       : [...color, value],
  //   })
  //   setProductList(productsData.filter(product => product.color >= value))
  // }

  const onSelectDiscount = e => {
    const { value, checked } = e.target
    const { discount } = filters
    var existing = [...discount];
    if(checked) {
      existing = [...discount, value];
      setFilters({
        ...filters,
        discount: existing
      })
    } else {
      const unCheckedItem = discount.find(item => item === value);
      if(unCheckedItem) {
        existing = discount.filter(item => item !== value)
      }
    }
    setFilters({
      ...filters,
      discount: existing
    })    
    // onFilterProducts(value, checked)

    let filteredProducts = productsData
    if (checked && parseInt(value) === 0) {
      filteredProducts = productsData.filter(product => product.offer < 10)
    } else if (checked && existing.length > 0) {
      filteredProducts = productsData.filter(
        product => product.offer >= Math.min(...existing)
      )
    }
    setProductList(filteredProducts)
  }
  
  const onUpdate = (render, handle, value) => {
    setProductList(
      productsData.filter(
        product => product.newPrice >= value[0] && product.newPrice <= value[1]
      )
    )
  }

  /*
  on change rating checkbox method
  */
  const onChangeRating = value => {
    setProductList(productsData.filter(product => product.rating >= value))
  }

  const onSelectRating = value => {
    setProductList(productsData.filter(product => product.rating === value))
  }

  const onUncheckMark = () => {
    setProductList(productsData)
  }

  const handlePageClick = page => {
    setPage(page)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Product" />
          <Row>
            <Col lg="4" xl="3">
              <Card>
                <CardHeader className="bg-transparent border-bottom">
                  <h5 className="mb-0">Filters</h5>
                </CardHeader>
                <div className="p-4">
                  <h5 className="font-size-14 mb-3">Categories</h5>
                  <div className="custom-accordion">
                    <Link to="#" className="text-body fw-semibold pb-2 d-block" onClick={toggle}><i className="mdi mdi-chevron-up accor-down-icon text-primary me-1"></i> Footwear</Link>
                    <Collapse isOpen={isOpen}>
                      <div className="card p-2 border shadow-none">
                        <ul className="list-unstyled categories-list mb-0">
                          <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Formal Shoes</Link></li>
                          <li className="active"><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Sports Shoes</Link></li>
                          <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Casual Shoes</Link></li>
                          <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Sandals</Link></li>
                          <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Slippers</Link></li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </div>
                <div className="p-4 border-top">
                  <div>
                    <h5 className="font-size-14 mb-4">Price</h5>
                    <br />
                    <Nouislider
                      range={{ min: 0, max: 600 }}
                      tooltips={true}
                      start={[100, 500]}
                      connect
                      onSlide={onUpdate}
                    />
                  </div>
                </div>
                <div className="custom-accordion">
                  <div className="p-4 border-top">
                    <div>
                      <h5 className="font-size-14 mb-0"><Link to="#" onClick={filtersizestoggle} className="text-dark d-block" >Sizes <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></Link></h5>
                      <Collapse isOpen={isFilterSizesOpen}>
                        <div className="mt-4">
                          <Media className="d-flex align-items-center">
                            <div className="flex-1">
                              <h5 className="font-size-15 mb-0">Select Sizes</h5>
                            </div>
                            <div className="w-xs">
                              <Input type="select" className="form-select">
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                              </Input>
                            </div>
                          </Media>
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div className="p-4 border-top">
                    <div>
                      <h5 className="font-size-14 mb-0">
                        <Link to="#" onClick={filtercolorstoggle} className="text-dark d-block" >Colors <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></Link>
                      </h5>
                      <Collapse isOpen={isFilterProductColorOpen} id="filterproductcolor-collapse">
                        <div className="mt-4">
                          {colorData.map((color, i) => (
                            <div
                              className="form-check mt-2"
                              key={"_colorfilter_" + i}
                            >
                              <Input
                                type="checkbox"
                                value={color.value}
                                className="form-check-input"
                                id={i + 'color'}
                              />
                              <Label className="form-check-label" htmlFor={i + 'color'}>
                                {color.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div className="p-4 border-top">
                    <div>
                      <h5 className="font-size-14 mb-0">
                        <Link to="#" onClick={filterratingtoggle} className="text-dark d-block" >Customer Rating <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></Link>
                      </h5>
                      <Collapse isOpen={isFilterProductRatingOpen} id="filterprodductcolor-collapse">
                        <div className="mt-4">
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck1"
                              onChange={e => {
                                if (e.target.checked) {
                                  onChangeRating(4)
                                } else {
                                  onUncheckMark(4)
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck1"
                            >
                              4 <i className="bx bx-star text-warning"></i> & Above
                        </Label>
                          </div>
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck2"
                              onChange={e => {
                                if (e.target.checked) {
                                  onChangeRating(3)
                                } else {
                                  onUncheckMark(3)
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck2"
                            >
                              3 <i className="bx bx-star text-warning"></i> & Above
                        </Label>
                          </div>
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck3"
                              onChange={e => {
                                if (e.target.checked) {
                                  onChangeRating(2)
                                } else {
                                  onUncheckMark(2)
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck3"
                            >
                              2 <i className="bx bx-star text-warning"></i> & Above
                        </Label>
                          </div>
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck4"
                              onChange={e => {
                                if (e.target.checked) {
                                  onSelectRating(1)
                                } else {
                                  onUncheckMark(1)
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck4"
                            >
                              1 <i className="bx bx-star text-warning"></i>
                            </Label>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div className="p-4 border-top">
                    <div>
                      <h5 className="font-size-14 mb-0">
                        <Link to="#" onClick={filterdiscountstoggle} className="text-dark d-block" >Discount <i className="mdi mdi-chevron-up float-end accor-down-icon"></i></Link>
                      </h5>
                      <Collapse isOpen={isFilterProductDiscountOpen} id="filterprodductcolor-collapse">
                        {discountData.map((discount, i) => (
                          <div
                            className="form-check mt-2"
                            key={"_discount_" + i}
                          >
                            <Input
                              type="checkbox"
                              value={discount.value}
                              className="form-check-input"
                              id={i}
                              onChange={onSelectDiscount}
                            />
                            <Label className="form-check-label" htmlFor={i}>
                              {discount.label}
                            </Label>
                          </div>
                        ))}
                      </Collapse>
                    </div>
                  </div>
                  
                </div>
              </Card>
            </Col>

            <Col lg="8" xl="9">
              <Card>
                <CardBody>
                  <div>
                    <Row>
                      <Col md="6">
                        <div>
                          <h5>Showing result for "Shoes"</h5>
                          <ol className="breadcrumb p-0 bg-transparent mb-2">
                            <li className="breadcrumb-item"><Link to="#">Footwear</Link></li>
                            <li className="breadcrumb-item active">Shoes</li>
                          </ol>
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="form-inline float-md-end">
                          <div className="search-box ml-2">
                            <div className="position-relative">
                              <Input
                                type="text"
                                className="orm-control bg-light border-light rounded"
                                placeholder="Search..."
                              />
                              <i className="mdi mdi-magnify search-icon"></i>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Nav tabs className="nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list">
                      <NavItem>
                        <NavLink className="disabled fw-medium">Sort by:</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="active">Popularity</NavLink>
                      </NavItem>
                      <NavItem><NavLink>Newest</NavLink> </NavItem>
                      <NavItem><NavLink>Discount</NavLink></NavItem>
                    </Nav>
                    <Row>
                      {!isEmpty(productList) &&
                        productList.map((product, key) => (
                          <Col xl="4" sm="6" key={"_col_" + key}>
                            <div className="product-box" onClick={() =>
                              history.push(`/ecommerce-products/${product.id}`)
                            }>
                              <div className="product-img pt-4 px-4">
                                {product.islable ? (
                                  <div className="product-ribbon badge bg-warning">
                                    {product.lable}
                                  </div>
                                ) : null}
                                {product.isOffer ? (
                                  <div className="product-ribbon badge bg-danger">
                                    {`-${product.offer}%`}
                                  </div>
                                ) : null}
                                <div className="product-wishlist">
                                  <Link to="#">
                                    <i className="mdi mdi-heart-outline"></i>
                                  </Link>
                                </div>
                                <img src={product.image} alt="" className="img-fluid mx-auto d-block" />
                              </div>

                              <div className="text-center product-content p-4">

                                <h5 className="mb-1"><Link
                                  to={"/ecommerce-product-detail/" + product.id}
                                  className="text-dark"
                                >
                                  {product.name}{" "}
                                </Link></h5>
                                <p className="text-muted font-size-13">{product.currentcolor}, Shoes</p>

                                <h5 className="mt-3 mb-0">
                                  <span className="text-muted me-2">
                                    <del>${product.oldPrice}</del>
                                  </span>
                                  <b>${product.newPrice}</b>
                                </h5>

                                <ul className="list-inline mb-0 text-muted product-color">
                                  <li className="list-inline-item">
                                    Colors :
                                  </li>
                                  {!isEmpty(product.colors) && product.colors.map((pcolor, colorkey) => (
                                    <React.Fragment key={key + "_color_" + colorkey}>
                                      <li className="list-inline-item">
                                        <i className={"mdi mdi-circle text-" + pcolor}></i>
                                      </li>
                                    </React.Fragment>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Col>
                        ))}
                    </Row>
                    <Row className="mt-4">
                      <Col sm="6">
                        <div>
                          <p className="mb-sm-0">Page 2 of 84</p>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="float-sm-end">
                          <Pagination className="pagination pagination-rounded mb-sm-0">
                            <PaginationItem disabled={page === 1}>
                              <PaginationLink
                                previous
                                to="#"
                                onClick={() => handlePageClick(page - 1)}
                              />
                            </PaginationItem>
                            {map(Array(totalPage), (item, i) => (
                              <PaginationItem active={i + 1 === page} key={"_pagination_" + i}>
                                <PaginationLink
                                  onClick={() => handlePageClick(i + 1)}
                                  to="#"
                                >
                                  {i + 1}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
                            <PaginationItem disabled={page === totalPage}>
                              <PaginationLink
                                next
                                to="#"
                                onClick={() => handlePageClick(page + 1)}
                              />
                            </PaginationItem>
                          </Pagination>
                        </div>
                      </Col>
                    </Row>
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

EcommerceProducts.propTypes = {
  products: PropTypes.array,
  history: PropTypes.object,
  onGetProducts: PropTypes.func,
}

const mapStateToProps = state => ({
  products: state.ecommerce.products,
})

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProducts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceProducts))
