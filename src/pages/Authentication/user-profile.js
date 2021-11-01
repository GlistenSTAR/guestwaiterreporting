import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import history from '../../history';

import {
  Input,
  Label,
  Form,
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Media,
  Button,
} from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// Redux
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumb from '../../components/Common/Breadcrumb';

import avatar from '../../assets/images/users/avatar.jpg';
// actions
import { updateUserProfile, getUserDetails } from '../../store/actions';
import { USER_UPDATE_PROFILE_RESET } from '../../store/auth/updateProfile/actionTypes';

const ProfileScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name || success || userInfo._id !== user._id) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, user, success]);

  // handleValidSubmit
  const handleValidSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Le Mot De Passe N'est Pas Identique !!!");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage('');
      setMessageSuccess('Le compte à étè ajouté avec succès');
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Minible" breadcrumbItem="Manager Profile" />

          <Row>
            <Col lg="12">
              {props.error && props.error ? (
                <Alert color="danger">{props.error}</Alert>
              ) : null}
              {props.success && props.success ? (
                <Alert color="success">{props.success}</Alert>
              ) : null}

              <Card>
                <CardBody>
                  <Media className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt="Avatar"
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <Media body className="flex-1 align-self-center">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-1">{email}</p>
                      </div>
                    </Media>
                  </Media>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Update Profile</h4>

          {error && <Alert color="danger">{error}</Alert>}

          {message && <Alert color="danger">{message}</Alert>}

          <Row className="justify-content-center">
            <Col md={8}>
              <div className="mt-5 mt-lg-4">
                <Form onSubmit={handleValidSubmit}>
                  <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-firstname-input"
                      className="col-sm-3 col-form-label"
                    >
                      Nom
                    </Label>
                    <Col sm={9}>
                      <Input
                        name="name"
                        type="name"
                        className="form-control"
                        id="horizontal-firstname-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-email-input"
                      className="col-sm-3 col-form-label"
                    >
                      Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        className="form-control"
                        id="horizontal-email-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-input"
                      className="col-sm-3 col-form-label"
                    >
                      Password
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="password"
                        className="form-control"
                        id="horizontal-password-input"
                        placeholder="Enter Password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Label
                      htmlFor="horizontal-password-input"
                      className="col-sm-3 col-form-label"
                    >
                      Confirm Password
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="password"
                        className="form-control"
                        id="horizontal-confirm-password-input"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Col>
                  </Row>

                  <div className="row justify-content-end">
                    <Col sm={9}>
                      <div className="text-center">
                        <Button type="submit" color="primary" className="w-md">
                          Submit Update
                        </Button>
                      </div>
                    </Col>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ProfileScreen.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
};

export default ProfileScreen;

// const mapStatetoProps = (state) => {
//   const { error, success } = state.Profile;
//   return { error, success };
// };

// export default withRouter(
//   connect(mapStatetoProps, { editProfile, resetProfileFlag })(UserProfile)
// );
