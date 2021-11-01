import PropTypes from 'prop-types';
import history from '../../history';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';

import { listUsers, deleteUser } from '../../store/actions';

import { Alert, Card, CardBody, Col, Button } from 'reactstrap';

const CardContact = (props) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/dashboard');
    }
  }, [successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are You Sure You Want To DELETE This User??')) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        'loading...'
      ) : error ? (
        <Alert color="danger">{error}</Alert>
      ) : users ? (
        users.map((user) => (
          <Col xl="3" sm="6" key={user._id}>
            <Card className="text-center">
              <CardBody>
                <div className="clearfix"></div>
                {/* {user.first_name ? ( */}
                <div className="avatar-lg mx-auto mb-4">
                  <div className="avatar-title bg-soft-primary rounded-circle text-primary">
                    <i className="mdi mdi-account-circle display-4 m-0 text-primary"></i>
                  </div>
                </div>
                <h5 className="font-size-16 mb-1">
                  <Link to="#" className="text-dark">
                    {user.name} {user.last_name}{' '}
                    {user.isAdmin ? (
                      <i className="far fa-sun" style={{ color: 'green' }}></i>
                    ) : (
                      <i className="far fa-sun" style={{ color: 'blue' }}></i>
                    )}
                  </Link>
                </h5>
                <p className="text-muted mb-2">{user.email}</p>
              </CardBody>
              <div className="d-flex justify-content-around mb-3">
                <Link to={`contacts-profile/${user.id}/edit`} className="">
                  <Button
                    color="info"
                    className="btn-soft-info waves-effect waves-light"
                  >
                    Edit <i className="fas fa-arrow-right"></i>
                  </Button>
                </Link>
                <Link className="">
                  <Button
                    color="success"
                    className="btn-soft-success waves-effect waves-light"
                  >
                    Message <i className="uil uil-envelope-alt me-1"></i>
                  </Button>
                </Link>
                <Button
                  onClick={() => deleteHandler(user._id)}
                  color="danger"
                  className="btn-soft-danger waves-effect waves-light"
                >
                  Delete <i className="fas fa-trash-alt"></i>
                </Button>
              </div>
            </Card>
          </Col>
        ))
      ) : (
        'Loading'
      )}
    </React.Fragment>
  );
};

CardContact.propTypes = {
  users: PropTypes.object,
};

export default CardContact;
