import React , {useEffect} from "react"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"

import { Container, Row, Col, CardBody, Card, Button } from "reactstrap"

// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"
import avatar4 from "../../assets/images/users/avatar-4.jpg"

const LockScreen = () => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div>
                <Link to="/" className="mb-5 d-block auth-logo">
                  <img src={logo} alt="" height="22" className="logo logo-dark" />
                  <img src={logolight} alt="" height="22" className="logo logo-light" />
                </Link>
              </div>

              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Lock screen</h5>
                    <p className="text-muted">Enter your password to unlock the screen!</p>
                  </div>
                  <div className="p-2 mt-4">
                    <div className="user-thumb text-center mb-4">
                      <img src={avatar4} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                      <h5 className="font-size-15 mt-3">Marcus</h5>
                    </div>
                    <AvForm>
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mb-3 text-end">
                        <Button
                          color="primary"
                          className="w-sm waves-effect waves-light"
                          type="submit"
                        >
                          Unlock
                            </Button>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">Not you ? return <Link to="/pages-login" className="fw-medium text-primary"> Sign In </Link></p>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Minible. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default LockScreen
