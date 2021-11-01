import history from '../../history';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Row, Col, CardBody, Card, Alert, Container } from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// action
// import {
//   registerUser,
//   apiError,
//   registerUserFailed,
// } from '../../store/actions';

import { register } from '../../store/actions';

// Redux
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import images
import logo from '../../assets/images/logo-dark.png';
import logolight from '../../assets/images/logo-light.png';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messagePass, setMessagePass] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push('/register');
    }
  }, [userInfo]);
  // handleValidSubmit
  const handleValidSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Le Mot De Passe N'est Pas Identique !!!");
    } else if (password === '') {
      setMessagePass('Please provide a password !!!');
    } else {
      dispatch(register(name, email, password));
      setMessageSuccess('Le compte à étè ajouté avec succès');
      // setName('');
      // setEmail('');
    }
  };

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container className="mt-5">
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Ajouter Un Compte</h5>
                  </div>
                  <div className="p-2 mt-4">
                    <AvForm
                      className="form-horizontal"
                      onSubmit={handleValidSubmit}
                    >
                      {messageSuccess ? (
                        <Alert color="success">{messageSuccess}</Alert>
                      ) : null}

                      {props.registrationError && props.registrationError ? (
                        <Alert color="danger">{props.registrationError}</Alert>
                      ) : null}

                      {error && <Alert color="danger">{error}</Alert>}

                      {message && <Alert color="danger">{message}</Alert>}
                      {messagePass && (
                        <Alert color="danger">{messagePass}</Alert>
                      )}

                      {/* {messageSuccess && (
                        <Alert color="success">{messageSuccess}</Alert>
                      )} */}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter Email"
                          type="email"
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="name"
                          label="Username"
                          type="text"
                          required
                          placeholder="Enter Username"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="confirm_password"
                          label="Confirm Password"
                          type="password"
                          required
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="auth-terms-condition-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="auth-terms-condition-check"
                        >
                          j'accepte
                          <Link to="" className="text-dark">
                            les termes et conditions
                          </Link>
                        </label>
                      </div>

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
};

// const mapStatetoProps = (state) => {
//   const { user, registrationError, loading } = state.Account;
//   return { user, registrationError, loading };
// };

// export default connect(mapStatetoProps, {
//   registerUser,
//   apiError,
//   registerUserFailed,
// })(Register);

export default Register;
