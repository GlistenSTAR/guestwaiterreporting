import React, { useState, useEffect } from 'react';
import { logout } from '../../../store/auth/userLogin/actions';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

//i18n
import { withTranslation } from 'react-i18next';
// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// import { getUserDetails } from '../../../store/actions';

// users
import user from '../../../assets/images/users/avatar.jpg';

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
            {userInfo.name}
          </span>{' '}
          <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
        </DropdownToggle>
        {userInfo ? (
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem tag="a" href="/profile">
              {' '}
              <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>
              {props.t('View Profile')}{' '}
            </DropdownItem>
            <DropdownItem tag="a" href="#">
              <i className="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>
              {props.t('Settings')}
              <span className="badge bg-soft-success rounded-pill mt-1 ms-2">
                03
              </span>
            </DropdownItem>
            <div className="dropdown-divider" />
            <Link to="" onClick={logoutHandler} className="dropdown-item">
              <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
              <span>Logout</span>
            </Link>
          </DropdownMenu>
        ) : (
          <></>
        )}
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
);
