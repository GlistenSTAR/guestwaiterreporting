import history from '../../../history';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
//import { map } from 'lodash';
// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
// import classnames from 'classnames';

// import Reviews from './Reviews';

//Import Breadcrumb
// import Breadcrumbs from '../../../components/Common/Breadcrumb';

import {
  getUserProfile,
  getUserDetails,
  updateUser,
} from '../../../store/actions';
import { USER_UPDATE_RESET } from '../../../store/auth/updateUsers/actionTypes';

// import ToolkitProvider from 'react-bootstrap-table2-toolkit';
// import BootstrapTable from 'react-bootstrap-table-next';
// import projectColumns from './projectColumns';
// import SimpleBar from 'simplebar-react';

function ContactsProfile({ match, history }) {
  const userId = match.params.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push('/users');
    } else {
      if (!user.name || user._id !== Number(userId)) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, userId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: user._id, name, email, isAdmin }));
  };

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container className="mt-5">
          <Link to="/users">
            <i className="fas fa-arrow-left"></i> Go Back
          </Link>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Editer Le Profile</h5>
                  </div>
                  <div className="p-2 mt-4">
                    <AvForm
                      className="form-horizontal"
                      onSubmit={submitHandler}
                    >
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
                          autoComplete="new-password"
                          name="password"
                          label="Password"
                          type="password"
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
                          placeholder="Confirm Password"
                          autoComplete="new-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="square-switch">
                        <input
                          type="checkbox"
                          id="square-switch"
                          switch="bool"
                          checked={isAdmin}
                          onChange={() => setIsAdmin(!isAdmin)}
                        />
                        <label
                          htmlFor="square-switch"
                          data-on-label="Yes"
                          data-off-label="No"
                        />
                      </div>

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                          Update Profile
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
}

export default ContactsProfile;

// ContactsProfile.propTypes = {
//   userProfile: PropTypes.any,
//   onGetUserProfile: PropTypes.func,
// };

// const mapStateToProps = ({ contacts }) => ({
//   userProfile: contacts.userProfile,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onGetUserProfile: () => dispatch(getUserProfile()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(ContactsProfile));
