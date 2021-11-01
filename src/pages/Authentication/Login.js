import history from '../../history';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Row, Col, Alert, Container, CardBody, Card } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Social Media Imports
//import { GoogleLogin } from 'react-google-login';
// import TwitterLogin from "react-twitter-auth"
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// actions
import { loginUser, apiError, socialLogin } from '../../store/actions';

// My Login
import { login } from '../../store/actions';

// import images
import logo from '../../assets/images/guestwaiter-logo-sm.png';
import logolight from '../../assets/images/guestwaiter-logo-V2.png';

const Login = (props, location) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/dashboard');
      window.location.reload();
    }
  }, [userInfo]);

  // handleValidSubmit
  const handleValidSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    //props.login(props.history);
  };

  // useEffect(() => {
  //   document.body.className = 'authentication-bg';
  //   // remove classname when component will unmount
  //   return function cleanup() {
  //     document.body.className = '';
  //   };
  // });

  return (
    <React.Fragment>
      {/* <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="mdi mdi-home-variant h2"></i>
        </Link>
      </div> */}
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <Link to="/" className="mb-5 d-block auth-logo">
                  <img
                    src={logo}
                    alt=""
                    height="22"
                    className="logo logo-dark"
                  />
                  <img
                    src={logolight}
                    alt=""
                    height="22"
                    className="logo logo-light"
                  />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Welcome Back !</h5>
                    <p className="text-muted">
                      Sign in to Guestwaiter Reporting.
                    </p>
                  </div>
                  <div className="p-2 mt-4">
                    <AvForm
                      className="form-horizontal"
                      onSubmit={handleValidSubmit}
                    >
                      {error && typeof error === 'string' ? (
                        <Alert color="danger">{error}</Alert>
                      ) : null}

                      {loading && <p>Loading...</p>}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          value={email}
                          className="form-control"
                          placeholder="Enter Email"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <div className="float-end">
                          <Link to="/forgot-password" className="text-muted">
                            Forgot password?
                          </Link>
                        </div>
                        <AvField
                          name="password"
                          label="Password"
                          value={password}
                          type="password"
                          required
                          placeholder="Enter Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Guestwaiter Reporting. Crafted
                  with <i className="mdi mdi-heart text-danger"></i> By <br />
                  Magic Productions Ltd
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

//export default Login;

const mapStateToProps = (state) => {
  const userLogin = state.userLogin;
  //const { error } = state.Login;
  return { userLogin };
};

export default withRouter(connect(mapStateToProps)(Login));

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
};
