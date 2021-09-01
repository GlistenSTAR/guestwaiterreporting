import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';

// //Import Scrollbar
import SimpleBar from 'simplebar-react';

// MetisMenu
import MetisMenu from 'metismenujs';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

//i18n
import { withTranslation } from 'react-i18next';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SidebarContent = (props) => {
  const ref = useRef();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add('active');
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== 'side-menu') {
      parent2El.classList.add('mm-show');
    }

    if (parent) {
      parent.classList.add('mm-active');
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add('mm-show'); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add('mm-active'); // li
          parent3.childNodes[0].classList.add('mm-active'); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add('mm-show'); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add('mm-show'); // li
              parent5.childNodes[0].classList.add('mm-active'); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;

    new MetisMenu('#side-menu');
    let matchingMenuItem = null;
    const ul = document.getElementById('side-menu');
    const items = ul.getElementsByTagName('a');
    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.location.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  const [singlebtn1, setSinglebtn1] = useState(false);

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: '100%' }} ref={ref} className="sidebar-menu-scroll">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="text-center master-tab">
              <Dropdown
                isOpen={singlebtn1}
                toggle={() => setSinglebtn1(!singlebtn1)}
                className="mt-4 mt-sm-0"
                styles="borders:none;"
              >
                <i className="uil-building"></i>
                <DropdownToggle tag="button" className="btn btn-light main-rest-tab" caret>
                  Restaurants 1<i className="mdi mdi-chevron-down" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Restaurants 2</DropdownItem>
                  <DropdownItem>Restaurants 3</DropdownItem>
                  <DropdownItem>Restaurants 4</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>

            <li className="menu-title">{props.t('Menu')} </li>
            <li>
              <Link to="/#" className="waves-effect">
                <i className="uil-home-alt"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">
                  01
                </span> */}
                <span>{props.t('Dashboard')}</span>
              </Link>
            </li>

            <li>
              <Link to="controle" className="waves-effect">
                <i className="uil-sliders-v"></i>
                <span>{props.t('Bande De Controle')}</span>
              </Link>
            </li>
            <li>
              <Link to="report" className="waves-effect">
                <i className="fas fa-chart-line"></i>
                <span>{props.t('Report')}</span>
              </Link>
            </li>
            <li>
              <Link to="waiters" className="waves-effect">
                <i className="fas fa-users"></i>
                <span>{props.t('Vendeurs')}</span>
              </Link>
            </li>
            <li>
              <Link to="program" className="waves-effect">
                <i className="uil-slack"></i>
                <span>{props.t('Programmation')}</span>
              </Link>
            </li>
            <li>
              <Link to="users" className="waves-effect">
                <i className="fas fa-laptop-house"></i>
                <span>{props.t('Comptes')}</span>
              </Link>
            </li>
            <li>
              <Link to="logout" className="waves-effect">
                <i className="uil-sign-out-alt"></i>
                <span>{props.t('Déconnexion')}</span>
              </Link>
            </li>

            {/* <li className="menu-title">{props.t("Apps")}</li>

            <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="uil-calender"></i>
                <span>{props.t("Calendar")}</span>
              </Link>
            </li>

            <li>
              <Link to="/chat" className="waves-effect">
                <i className="uil-comments-alt"></i>
                <span className="badge rounded-pill bg-warning float-end">
                  {props.t("New")}
                </span>
                <span>{props.t("Chat")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-store"></i>
                <span>{props.t("Ecommerce")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ecommerce-products">{props.t("Products")}</Link>
                </li>
                <li>
                  <Link to="/ecommerce-product-detail">
                    {props.t("Product Detail")}
                  </Link>
                </li>
                <li>
                  <Link to="/ecommerce-orders">{props.t("Orders")}</Link>
                </li>
                <li>
                  <Link to="/ecommerce-customers">{props.t("Customers")}</Link>
                </li>
                <li>
                  <Link to="/ecommerce-cart">{props.t("Cart")}</Link>
                </li>
                <li>
                  <Link to="/ecommerce-checkout">{props.t("Checkout")}</Link>
                </li>
                <li>
                  <Link to="/ecommerce-shops">{props.t("Shops")}</Link>
                </li>
                <li>
                  <Link to="/ecommerce-add-product">
                    {props.t("Add Product")}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-envelope"></i>
                <span>{props.t("Email")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/email-inbox">{props.t("Inbox")}</Link>
                </li>
                <li>
                  <Link to="/email-read">{props.t("Read Email")} </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-invoice"></i>
                <span>{props.t("Invoices")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/invoices-list">{props.t("Invoice List")}</Link>
                </li>
                <li>
                  <Link to="/invoices-detail">{props.t("Invoice Detail")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-book-alt"></i>
                <span>{props.t("Contacts")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/contacts-grid">{props.t("User Grid")}</Link>
                </li>
                <li>
                  <Link to="/contacts-list">{props.t("User List")}</Link>
                </li>
                <li>
                  <Link to="/contacts-profile">{props.t("Profile")}</Link>
                </li>
              </ul>
            </li> 

            <li className="menu-title">Pages</li>
            <li>
              <Link to="/#" className="waves-effect">
                <i className="uil-user-circle"></i>
                <span>{props.t('Authentication')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-login">{props.t('Login')}</Link>
                </li>
                <li>
                  <Link to="/pages-register">{props.t('Register')}</Link>
                </li>
                <li>
                  <Link to="/page-recoverpw">
                    {props.t('Recover Password')}
                  </Link>
                </li>
                <li>
                  <Link to="/auth-lock-screen">{props.t('Lock Screen')}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-file-alt"></i>
                <span>{props.t('Utility')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-starter">{props.t('Starter Page')}</Link>
                </li>
                <li>
                  <Link to="/pages-maintenance">{props.t('Maintenance')}</Link>
                </li>
                <li>
                  <Link to="/pages-comingsoon">{props.t('Coming Soon')}</Link>
                </li>
                <li>
                  <Link to="/pages-timeline">{props.t('Timeline')}</Link>
                </li>
                <li>
                  <Link to="/pages-faqs">{props.t('FAQs')}</Link>
                </li>
                <li>
                  <Link to="/pages-pricing">{props.t('Pricing')}</Link>
                </li>
                <li>
                  <Link to="/pages-404">{props.t('Error 404')}</Link>
                </li>
                <li>
                  <Link to="/pages-500">{props.t('Error 500')}</Link>
                </li>
              </ul>
            </li> 

            <li className="menu-title">{props.t('Components')}</li> */}

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-flask"></i>
                <span>{props.t('UI Elements')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ui-alerts">{props.t('Alerts')}</Link>
                </li>
                <li>
                  <Link to="/ui-buttons">{props.t('Buttons')}</Link>
                </li>
                <li>
                  <Link to="/ui-cards">{props.t('Cards')}</Link>
                </li>
                <li>
                  <Link to="/ui-carousel">{props.t('Carousel')}</Link>
                </li>
                <li>
                  <Link to="/ui-dropdowns">{props.t('Dropdowns')}</Link>
                </li>
                <li>
                  <Link to="/ui-grid">{props.t('Grid')}</Link>
                </li>
                <li>
                  <Link to="/ui-images">{props.t('Images')}</Link>
                </li>
                <li>
                  <Link to="/ui-lightbox">{props.t('Lightbox')}</Link>
                </li>
                <li>
                  <Link to="/ui-modals">{props.t('Modals')}</Link>
                </li>
                <li>
                  <Link to="/ui-rangeslider">{props.t('Range Slider')}</Link>
                </li>
                <li>
                  <Link to="/ui-session-timeout">{props.t('Session Timeout')}</Link>
                </li>
                <li>
                  <Link to="/ui-progressbars">{props.t('Progress Bars')}</Link>
                </li>
                <li>
                  <Link to="/ui-sweet-alert">{props.t('Sweet-Alert')}</Link>
                </li>
                <li>
                  <Link to="/ui-tabs-accordions">{props.t('Tabs & Accordions')}</Link>
                </li>
                <li>
                  <Link to="/ui-typography">{props.t('Typography')}</Link>
                </li>
                <li>
                  <Link to="/ui-video">{props.t('Video')}</Link>
                </li>
                <li>
                  <Link to="/ui-general">{props.t('General')}</Link>
                </li>
                <li>
                  <Link to="/ui-colors">{props.t('Colors')}</Link>
                </li>
                <li>
                  <Link to="/ui-rating">{props.t('Rating')}</Link>
                </li>
                <li>
                  <Link to="/ui-notifications">{props.t('Notifications')}</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="waves-effect">
                <i className="uil-shutter-alt"></i>
                <span className="badge rounded-pill bg-info float-end">6</span>
                <span>{props.t('Forms')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/basic-elements">{props.t('Basic Elements')}</Link>
                </li>
                <li>
                  <Link to="/form-validation">
                    {props.t('Form Validation')}
                  </Link>
                </li>
                <li>
                  <Link to="/form-advanced">{props.t('Form Advanced')}</Link>
                </li>
                <li>
                  <Link to="/form-editors">{props.t('Form Editors')}</Link>
                </li>
                <li>
                  <Link to="/form-uploads">{props.t('Form File Upload')} </Link>
                </li>
                <li>
                  <Link to="/form-xeditable">{props.t('Form Xeditable')}</Link>
                </li>
                <li>
                  <Link to="/form-repeater">{props.t('Form Repeater')}</Link>
                </li>
                <li>
                  <Link to="/form-wizard">{props.t('Form Wizard')}</Link>
                </li>
                <li>
                  <Link to="/form-mask">{props.t('Form Mask')}</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-list-ul"></i>
                <span>{props.t('Tables')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/tables-basic">{props.t('Basic Table')}</Link>
                </li>
                <li>
                  <Link to="/tables-datatable">{props.t('Data Table')}</Link>
                </li>
                <li>
                  <Link to="/tables-responsive">{props.t('Responsive Table')}</Link>
                </li>
                <li>
                  <Link to="/tables-editable">{props.t('Editable Table')}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-chart"></i>
                <span>{props.t('Charts')}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="/apex-charts">{props.t('Apex')}</Link>
                </li>
                <li>
                  <Link to="/chartjs-charts">{props.t('Chartjs')}</Link>
                </li>
                <li>
                  <Link to="/e-charts">{props.t('E Chart')}</Link>
                </li>
                <li>
                  <Link to="/charts-knob">{props.t('Jquery Knob')}</Link>
                </li>
                <li>
                  <Link to="/sparkline-charts">{props.t('Sparkline Chart')}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-streering"></i>
                <span>{props.t('Icons')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/icons-unicons">{props.t('Unicons')}</Link>
                </li>
                <li>
                  <Link to="/icons-boxicons">{props.t('Boxicons')}</Link>
                </li>
                <li>
                  <Link to="/icons-materialdesign">{props.t('Material Design')}</Link>
                </li>
                <li>
                  <Link to="/icons-dripicons">{props.t('Dripicons')}</Link>
                </li>
                <li>
                  <Link to="/icons-fontawesome">{props.t('Font awesome')}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-location-point"></i>
                <span>{props.t('Maps')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/maps-google">{props.t('Google Maps')}</Link>
                </li>
                <li>
                  <Link to="/maps-vector">{props.t('Vector Maps')}</Link>
                </li>
                <li>
                  <Link to="/maps-leaflet">{props.t('Leaflet Maps')}</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-share-alt"></i>
                <span>{props.t('Multi Level')}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t('Level 1.1')}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t('Level 1.2')}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t('Level 2.1')}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t('Level 2.2')}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
