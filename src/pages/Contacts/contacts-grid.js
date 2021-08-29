import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Card
import CardContact from "./card-contact"

import { getUsers } from "../../store/contacts/actions"

const ContactsGrid = props => {
  const { users, onGetUsers } = props

  useEffect(() => {
    onGetUsers()
  }, [onGetUsers])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User Grid" />

          <Row>
            {map(users, (user, key) => (
              <CardContact user={user} key={"_user_" + key} />
            ))}
          </Row>

          <Row className="mt-3">
            <Col xl="12">
              <div className="text-center my-3">
                <Link to="#" className="text-primary"><i className="mdi mdi-loading mdi-spin font-size-20 align-middle me-2"></i> Load more </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ContactsGrid.propTypes = {
  users: PropTypes.array,
  onGetUsers: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  users: contacts.users,
})

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsGrid))
