import React from "react"
import { Card, CardBody, Table, CardTitle, Label ,Input ,Row, Col, Button} from "reactstrap"
import { Link } from "react-router-dom"

const LatestTransaction = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Latest Transaction</CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: "20px" }}>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck1" />
                                                <Label className="form-check-label" for="customCheck1">&nbsp;</Label>
                                            </div>
                                        </th>
                                        <th>Order ID</th>
                                        <th>Billing Name</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Payment Status</th>
                                        <th>Payment Method</th>
                                        <th>View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck2" />
                                                <Label className="form-check-label" for="customCheck2">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td><Link to="#" className="text-body fw-bold">#MB2540</Link> </td>
                                        <td>Neal Matthews</td>
                                        <td>
                                            07 Oct, 2019
                                    </td>
                                        <td>
                                            $400
                                    </td>
                                        <td>
                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                    </td>
                                        <td>

                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                        </Button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck3" />
                                                <Label className="form-check-label" for="customCheck3">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td><Link to="#" className="text-body fw-bold">#MB2541</Link> </td>
                                        <td>Jamal Burnett</td>
                                        <td>
                                            07 Oct, 2019
                                    </td>
                                        <td>
                                            $380
                                    </td>
                                        <td>
                                            <span className="badge rounded-pill bg-soft-danger font-size-12">Chargeback</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                    </td>
                                        <td>

                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                        </Button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck4" />
                                                <Label className="form-check-label" for="customCheck4">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td><Link to="#" className="text-body fw-bold">#MB2542</Link> </td>
                                        <td>Juan Mitchell</td>
                                        <td>
                                            06 Oct, 2019
                                    </td>
                                        <td>
                                            $384
                                    </td>
                                        <td>
                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                    </td>
                                        <td>
                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                        </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck5" />
                                                <Label className="form-check-label" for="customCheck5">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td><Link to="#" className="text-body fw-bold">#MB2543</Link> </td>
                                        <td>Barry Dick</td>
                                        <td>
                                            05 Oct, 2019
                                    </td>
                                        <td>
                                            $412
                                    </td>
                                        <td>
                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                                    </td>
                                        <td>
                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                        </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck6" />
                                                <Label className="form-check-label" for="customCheck6">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td><Link to="#" className="text-body fw-bold">#MB2544</Link> </td>
                                        <td>Ronald Taylor</td>
                                        <td>
                                            04 Oct, 2019
                                    </td>
                                        <td>
                                            $404
                                    </td>
                                        <td>
                                            <span className="badge rounded-pill bg-soft-warning font-size-12">Refund</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-visa me-1"></i> Visa
                                    </td>
                                        <td>
                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                        </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck7" />
                                                <Label className="form-check-label" for="customCheck7">&nbsp;</Label>
                                            </div>
                                        </td>
                                        <td><Link to="#" className="text-body fw-bold">#MB2545</Link> </td>
                                        <td>Jacob Hunter</td>
                                        <td>
                                            04 Oct, 2019
                                    </td>
                                        <td>
                                            $392
                                    </td>
                                        <td>
                                            <span className="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                        </td>
                                        <td>
                                            <i className="fab fa-cc-paypal me-1"></i> Paypal
                                    </td>
                                        <td>
                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                        </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default LatestTransaction