import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//i18n
import { withTranslation } from 'react-i18next';
// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// users
import user from '../../../assets/images/users/Hafid-Good.jpg';

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState('Admin');

  useEffect(() => {
    if (localStorage.getItem('authUser')) {
      if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
        const obj = JSON.parse(localStorage.getItem('authUser'));
        setusername(obj.displayName);
      } else if (process.env.REACT_APP_DEFAULTAUTH === 'fake' || process.env.REACT_APP_DEFAULTAUTH === 'jwt') {
        const obj = JSON.parse(localStorage.getItem('authUser'));
        setusername(obj.username);
      }
    }
  }, [props.success]);

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
          <img className="rounded-circle header-profile-user" src={user} alt="Header Avatar" />
          <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{username}</span>{' '}
          <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            {' '}
            <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>
            {props.t('View Profile')}{' '}
          </DropdownItem>
          <DropdownItem tag="a" href="/">
            <i className="uil uil-wallet font-size-18 align-middle me-1 text-muted"></i>
            {props.t('My Wallet')}
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <i className="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>
            {props.t('Settings')}
            <span className="badge bg-soft-success rounded-pill mt-1 ms-2">03</span>
          </DropdownItem>
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"></i>
            {props.t('Lock screen')}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link to="/login" className="dropdown-item">
            <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
            <span>{props.t('Logout')}</span>
          </Link>
        </DropdownMenu>
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

export default withRouter(connect(mapStatetoProps, {})(withTranslation()(ProfileMenu)));
