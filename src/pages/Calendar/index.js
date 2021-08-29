import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap"
import { AvField, AvForm } from "availity-reactstrap-validation"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"
import BootstrapTheme from "@fullcalendar/bootstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import {
  addNewEvent,
  deleteEvent,
  getCategories,
  getEvents,
  updateEvent,
} from "../../store/actions"
import DeleteModal from "./DeleteModal"
//css
import "@fullcalendar/bootstrap/main.css"
import Commingsoon from "../../assets/images/coming-soon-img.png"

const Calender = props => {
  const { events, categories } = props
  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [modalcategory, setModalcategory] = useState(false)
  const [event, setEvent] = useState({})
  const [selectedDay, setSelectedDay] = useState(0)
  const [isEdit, setIsEdit] = useState(false)

  const { onGetCategories, onGetEvents } = props

  useEffect(() => {
    
    onGetCategories()
    onGetEvents()
    new Draggable(document.getElementById("external-events"), {
      itemSelector: ".external-event",
    })
  }, [onGetCategories, onGetEvents]);

  /**
   * Handling the modal state
   */
  const toggle = () => {
    setModal(!modal)
    setTimeout(() => {
      setEvent({})
      setIsEdit(false)
    }, 500)
  }

  const toggleCategory = () => {
    setModalcategory(!modalcategory)
  }

  /**
   * Handling date click on calendar
   */
  const handleDateClick = arg => {
    setSelectedDay(arg)
    toggle()
  }

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = arg => {
    const event = arg.event
    setEvent({
      id: event.id,
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    })
    setIsEdit(true)
    toggle()
  }

  /**
   * Handling submit event on event form
   */
  const handleValidEventSubmit = (e, values) => {
    const { onAddNewEvent, onUpdateEvent } = props
    if (isEdit) {
      const updateEvent = {
        id: event.id,
        title: values.title,
        classNames: values.category + " text-white",
        start: event.start,
      }
      // update event
      onUpdateEvent(updateEvent)
    } else {
      const newEvent = {
        id: Math.floor(Math.random() * 100),
        title: values["title"],
        start: selectedDay ? selectedDay.date : new Date(),
        className: values.category + " text-white",
      }
      // save new event
      onAddNewEvent(newEvent)
    }
    setSelectedDay(null)
    toggle()
  }

  const handleValidEventSubmitcategory = (event, values) => {
    const { onAddNewEvent } = props
    
    const newEvent = {
      id: Math.floor(Math.random() * 100),
      title: values["title_category"],
      start: selectedDay ? selectedDay.date : new Date(),
      className: values.event_category + " text-white",
    }

    onAddNewEvent(newEvent)
    toggleCategory()  

  }

  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    const { onDeleteEvent } = props
    onDeleteEvent(event)
    setDeleteModal(false)
    toggle()
  }

  /**
   * On category darg event
   */
  const onDrag = (event) => {
    event.preventDefault()
  }

  /**
   * On calendar drop event
   */
  const onDrop = event => {
    const { onAddNewEvent } = props
    const draggedEl = event.draggedEl
    const newEvent = {
      id: Math.floor(Math.random() * 100),
      title: draggedEl.innerText,
      start: event.date,
      className: draggedEl.className,
    }
    onAddNewEvent(newEvent)
  }

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Calendar" breadcrumbItem="Calendar" />
          <Row>
            <Col className="col-12">
              <Row>
                <Col lg={3}>
                  <Card>
                    <CardBody className="d-grid">
                      <Button
                        color="primary"
                        className="btn font-16 btn-block"
                        onClick={toggleCategory}
                        id="btn-new-event"
                      >
                        <i className="mdi mdi-plus-circle-outline" />
                                            Create New Event
                                        </Button>
                      <Row className="justify-content-center mt-5">
                        <img src={Commingsoon} alt="" className="img-fluid d-block" />
                      </Row>
                      <div id="external-events" className="m-t-20">
                        <br />
                        <p className="text-muted">Drag and drop your event or click in the calendar</p>
                        {categories &&
                          categories.map((category, i) => (
                            <div
                              className={`external-event ${category.type} text-white fc-event`}
                              key={"cat-" + category.id}
                              draggable
                              onDrag={event => onDrag(event, category)}
                            >
                              <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                              {category.title}
                            </div>
                          ))}
                      </div>

                      <ol className="activity-feed mb-0 ps-2 mt-4 ms-1" >
                        <li className="feed-item">
                          <p className="mt-0 mb-0">Andrei Coman magna sed porta finibus, risus
                                                                        posted a new article: Forget UX Rowland</p>
                        </li>
                        <li className="feed-item">
                          <p className="mt-0 mb-0">Zack Wetass, sed porta finibus, risus Chris Wallace Commented Developer Moreno</p>
                        </li>
                        <li className="feed-item">
                          <p className="mt-0 mb-0">Zack Wetass, Chris combined Commented UX Murphy</p>
                        </li>
                      </ol>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="col-lg-9">
                  <Card>
                    <CardBody>
                      {/* fullcalendar control */}
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                          interactionPlugin,
                        ]}
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay",
                        }}
                        events={events}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />

                      {/* New/Edit event modal */}
                      <Modal isOpen={modal} className={props.className}>
                        <ModalHeader toggle={toggle} tag="h4">
                          {!!isEdit ? "Edit Event" : "Add Event"}
                        </ModalHeader>
                        <ModalBody>
                          <AvForm onValidSubmit={handleValidEventSubmit}>
                            <Row form>
                              <Col className="col-12">
                                <div className="mb-3">
                                  <AvField
                                    name="title"
                                    label="Event Name"
                                    type="text"
                                    errorMessage="Invalid name"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    value={event ? event.title : ""}
                                  />
                                </div>
                              </Col>
                              <Col className="col-12">
                                <div className="mb-3">
                                  <AvField
                                    type="select"
                                    name="category"
                                    label="Category"
                                    value={event ? event.category : "bg-primary"}
                                  >
                                    <option value="bg-danger">Danger</option>
                                    <option value="bg-success">Success</option>
                                    <option value="bg-primary">Primary</option>
                                    <option value="bg-info">Info</option>
                                    <option value="bg-dark">Dark</option>
                                    <option value="bg-warning">Warning</option>
                                  </AvField>
                                </div>

                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="text-right">
                                  <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={toggle}
                                  >
                                    Close
                                  </button>
                                  {!!isEdit && (
                                    <button
                                      type="button"
                                      className="btn btn-danger me-2"
                                      onClick={() => setDeleteModal(true)}
                                    >
                                      Delete
                                    </button>
                                  )}
                                  <button
                                    type="submit"
                                    className="btn btn-success save-event"
                                  >
                                    Save
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </AvForm>
                        </ModalBody>
                      </Modal>

                      <Modal
                        isOpen={modalcategory}
                        toggle={toggleCategory}
                        className={props.className}
                      >
                        <ModalHeader toggle={toggleCategory} tag="h4">
                          Add a category
                        </ModalHeader>
                        <ModalBody>
                          <AvForm
                            onValidSubmit={handleValidEventSubmitcategory}
                          >
                            <Row form>
                              <Col className="col-12 mb-3">
                                <AvField
                                  name="title_category"
                                  label="Category Name"
                                  type="text"
                                  errorMessage="Invalid name"
                                  validate={{
                                    required: { value: true },
                                  }}
                                  value={
                                    event.title_category
                                      ? event.title_category
                                      : ""
                                  }
                                />
                              </Col>
                              <Col className="col-12 mb-3">
                                <AvField
                                  type="select"
                                  name="event_category"
                                  label="Choose Category Color"
                                  value={
                                    event ? event.event_category : "bg-primary"
                                  }
                                >
                                  <option value="bg-danger">Danger</option>
                                  <option value="bg-success">Success</option>
                                  <option value="bg-primary">Primary</option>
                                  <option value="bg-info">Info</option>
                                  <option value="bg-dark">Dark</option>
                                  <option value="bg-warning">Warning</option>
                                </AvField>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="text-end">
                                  <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    onClick={toggleCategory}
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-success save-event"
                                  >
                                    Save
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </AvForm>
                        </ModalBody>
                      </Modal>

                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Calender.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
}

const mapStateToProps = ({ calendar }) => ({
  events: calendar.events,
  categories: calendar.categories,
})

const mapDispatchToProps = dispatch => ({
  onGetEvents: () => dispatch(getEvents()),
  onGetCategories: () => dispatch(getCategories()),
  onAddNewEvent: event => dispatch(addNewEvent(event)),
  onUpdateEvent: event => dispatch(updateEvent(event)),
  onDeleteEvent: event => dispatch(deleteEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calender)