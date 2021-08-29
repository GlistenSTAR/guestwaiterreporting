import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"

// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

const Recoverpw = () => {
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
          <i className="mdi mdi-home-variant h2"></i>
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
                <div className="card">

                  <div className="card-body p-4">

                    <div className="text-center mt-2">
                      <h5 className="text-primary">Reset Password</h5>
                      <p className="text-muted">Reset Password with Minible.</p>
                    </div>
                    <div className="p-2 mt-4">
                      <div className="alert alert-success text-center mb-4" role="alert">
                        Enter your Email and instructions will be sent to you!
                      </div>
                      <Form className="form-horizontal" action="dashboard">
                        <FormGroup className="mb-3">
                          <Label htmlFor="useremail">Email</Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="useremail"
                            placeholder="Enter email"
                          />
                        </FormGroup>

                        <div className="mt-3 text-end">
                          <button
                            className="btn btn-primary w-sm waves-effect waves-light"
                            type="submit"
                          >Reset</button>
                        </div>
                        <div className="mt-4 text-center">
                          <p className="mb-0">Remember It ? <Link to="/pages-login" className="fw-medium text-primary"> Signin </Link></p>
                        </div>
                      </Form>
                    </div>

                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p>
                    © {new Date().getFullYear()} Minible. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger" /> by Themesbrand
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Recoverpw
