import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

//Import Images
import errorImg from "../../assets/images/500-error.png"

const Pages500 = () => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <div className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <div>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="error-img">
                        <img src={errorImg} alt="" className="img-fluid mx-auto d-block" />
                      </div>
                    </Col>
                  </Row>
                </div>
                <h4 className="text-uppercase mt-4">Internal Server Error</h4>
                <p className="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                <div className="mt-5">
                  <Link className="btn btn-primary waves-effect waves-light" to="/">Back to Dashboard</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Pages500
