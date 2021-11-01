import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

//Import Card
import CardContact from './card-contact';

const ContactsGrid = (props) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <CardContact />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ContactsGrid.propTypes = {
  users: PropTypes.array,
  onGetUsers: PropTypes.func,
};

export default ContactsGrid;
