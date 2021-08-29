import React, {  useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { map } from "lodash"
import moment from "moment"
import {
    Card,
    Col,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Media,
    Row,
    Form,
    UncontrolledDropdown,
    Button
} from "reactstrap"

//SimpleBar
import SimpleBar from "simplebar-react"

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import avatar4 from "../../assets/images/users/avatar-4.jpg"

import {
    addMessage,
    getChats,
    getGroups,
    getMessages,
} from "../../store/actions"

const Chat = props => {
    const { chats, groups, messages } = props
    // const Chat_Box_Username2 = "Henry Wells"
    const [currentRoomId, setCurrentRoomId] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState({
        name: "Marcus",
        isActive: true,
    })
    const [notification_Menu, setnotification_Menu] = useState(false)
    const [Chat_Box_Username, setChat_Box_Username] = useState("Designer")
    const [curMessage, setcurMessage] = useState("")

    useEffect(() => {
        const { onGetChats, onGetGroups, onGetMessages } = props
        onGetChats()
        onGetGroups()
        onGetMessages(currentRoomId)
    }, [props, currentRoomId])


    const toggleNotification = () => {
        setnotification_Menu(!notification_Menu)
    }

    //Use For Chat Box
    const userChatOpen = (id, name, status, roomId) => {
        const { onGetMessages } = props
        setChat_Box_Username(name)
        setCurrentRoomId(roomId)
        onGetMessages(roomId)
    }

    const addMessage = (roomId, sender) => {
        const { onAddMessage } = props
        const message = {
            id: Math.floor(Math.random() * 100),
            roomId,
            sender,
            message: curMessage,
            createdAt: new Date(),
        }
        setcurMessage("")
        onAddMessage(message)
    }

    

    const onKeyPress = e => {
        const { key, value } = e
        if (key === "Enter") {
            setcurMessage(value)
            addMessage(currentRoomId, currentUser.name)
        }
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Minible" breadcrumbItem="Chat" />

                    <div className="d-lg-flex mb-4">
                        <Card className="chat-leftsidebar">
                            <div className="p-3 px-4">
                                <Media className="d-flex">
                                    <div className="align-self-center me-3">
                                        <img
                                            src={avatar4}
                                            className="avatar-xs rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <Media body className="flex-1">
                                        <h5 className="font-size-16 mt-0 mb-1">
                                            <Link to="#" className="text-dark">{currentUser.name} <i className="mdi mdi-circle text-success align-middle font-size-10 ms-1"></i></Link>
                                        </h5>
                                        <p className="text-muted mb-0">
                                            Available
                                       </p>
                                    </Media>

                                    <div>
                                        <Dropdown
                                            isOpen={notification_Menu}
                                            toggle={toggleNotification}
                                            className="chat-noti-dropdown"
                                        >
                                            <DropdownToggle className="btn py-0" tag="button">
                                                <i className="uil uil-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem href="#">Profile</DropdownItem>
                                                <DropdownItem href="#">
                                                    Edit
                                                </DropdownItem>
                                                <DropdownItem href="#">
                                                    Add Contact
                                                </DropdownItem>
                                                <DropdownItem href="#">
                                                    Setting
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </Media>
                            </div>
                            <div className="p-3">
                                <div className="search-box chat-search-box">
                                    <div className="position-relative">
                                        <Input
                                            type="text"
                                            className="form-control bg-light border-light rounded"
                                            placeholder="Search..."
                                        />
                                        <i className="uil uil-search search-icon"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-3">
                                <SimpleBar
                                    style={{ height: "470px" }}
                                    data-simplebar
                                >
                                    <div className="p-4 border-top" >
                                        <div>
                                            <div className="float-end">
                                                <Link to="#" className="text-primary"><i className="mdi mdi-plus"></i> New Group</Link>
                                            </div>
                                            <h5 className="font-size-16 mb-3"><i className="uil uil-users-alt me-1"></i> Groups</h5>
                                            <ul className="list-unstyled chat-list group-list">
                                                {groups &&
                                                    groups.map(group => (
                                                        <li key={"test" + group.image}>
                                                            <Link
                                                                to="#"
                                                                onClick={() => {
                                                                    userChatOpen(
                                                                        group.id,
                                                                        group.name,
                                                                        group.status,
                                                                        Math.floor(Math.random() * 100)
                                                                    )
                                                                }}
                                                            >
                                                                <Media className="d-flex align-items-center">
                                                                    <div className="avatar-xs me-3">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            {group.image}
                                                                        </span>
                                                                    </div>

                                                                    <Media body className="flex-1">
                                                                        <h5 className="font-size-14 mb-0">
                                                                            {group.name}
                                                                        </h5>
                                                                    </Media>
                                                                </Media>
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-4 border-top">
                                        <div>
                                            <div className="float-end">
                                                <Link to="#" className="text-primary"><i className="mdi mdi-plus"></i> New Contact</Link>
                                            </div>
                                            <h5 className="font-size-16 mb-3"><i className="uil uil-user me-1"></i> Contacts</h5>
                                            <ul className="list-unstyled chat-list">
                                                {map(chats, chat => (
                                                    <li
                                                        key={chat.id + chat.status}
                                                        className={
                                                            currentRoomId === chat.roomId
                                                                ? "active"
                                                                : ""
                                                        }
                                                    >
                                                        <Link
                                                            to="#"
                                                            onClick={() => {
                                                                userChatOpen(
                                                                    chat.id,
                                                                    chat.name,
                                                                    chat.status,
                                                                    chat.roomId
                                                                )
                                                            }}
                                                        >
                                                            <Media className="d-flex">
                                                                <div className={
                                                                    chat.status === "online"
                                                                        ? "user-img online align-self-center me-3"
                                                                        : chat.status === "intermediate"
                                                                            ? "user-img away align-self-center me-3"
                                                                            : "user-img align-self-center me-3"
                                                                }>
                                                                    <img
                                                                        src={chat.image}
                                                                        className="rounded-circle avatar-xs"
                                                                        alt=""
                                                                    />
                                                                    <span className="user-status"></span>
                                                                </div>

                                                                <Media className="flex-1 overflow-hidden" body>
                                                                    <h5 className="text-truncate font-size-14 mb-1">
                                                                        {chat.name}
                                                                    </h5>
                                                                    <p className="text-truncate mb-0">
                                                                        {chat.description}
                                                                    </p>
                                                                </Media>
                                                                <div className="font-size-11">
                                                                    {chat.time}
                                                                </div>
                                                            </Media>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </div>
                        </Card>

                        <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
                            <Card>
                                <div className="p-3 px-lg-4 border-bottom">
                                    <Row>
                                        <Col md="4" className="col-6">
                                            <h5 className="font-size-16 mb-1 text-truncate"><Link to="#" className="text-dark">{Chat_Box_Username}</Link></h5>
                                            <p className="text-muted text-truncate mb-0"><i className="uil uil-users-alt me-1"></i> 12 Members</p>
                                        </Col>
                                        <Col md="8" className="col-6">
                                            <ul className="list-inline user-chat-nav text-end mb-0">
                                                <li className="list-inline-item">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle className="btn nav-btn" tag="button">
                                                            <i className="uil uil-search"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-end dropdown-menu-md">
                                                            <Form className="p-2">
                                                                <div>
                                                                    <Input type="text" className="form-control rounded" placeholder="Search..." />
                                                                </div>
                                                            </Form>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </li>
                                                <li className="list-inline-item">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle className="btn nav-btn" tag="button">
                                                            <i className="uil uil-ellipsis-h"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-end">
                                                            <DropdownItem href="#">Profile</DropdownItem>
                                                            <DropdownItem href="#">Archive</DropdownItem>
                                                            <DropdownItem href="#">Muted</DropdownItem>
                                                            <DropdownItem href="#">Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="px-lg-2">
                                    <div className="chat-conversation p-3">
                                        <PerfectScrollbar style={{ height: "455px" }} className="list-unstyled mb-0">
                                            <li className="chat-day-title">
                                                <div className="title">Today</div>
                                            </li>
                                            {messages &&
                                                map(messages, message => (
                                                    <li
                                                        key={"test_k" + message.id}
                                                        className={
                                                            message.sender === currentUser.name
                                                                ? "right"
                                                                : ""
                                                        }
                                                    >
                                                        <div className="conversation-list">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    <h5 className="font-size-14 conversation-name">
                                                                        <Link to="#" className="text-dark">{message.sender}</Link>
                                                                        <span className="d-inline-block font-size-12 text-muted ms-2">{moment(message.createdAt).format(
                                                                            "hh:mm"
                                                                        )}</span>

                                                                    </h5>
                                                                    <p className="mb-0">{message.message}</p>
                                                                </div>

                                                                <UncontrolledDropdown className="align-self-start">
                                                                    <DropdownToggle
                                                                        href="#"
                                                                        tag="a"
                                                                    >
                                                                        <i className="uil uil-ellipsis-v"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu direction="right">
                                                                        <DropdownItem href="#">
                                                                            Copy
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#">
                                                                            Save
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#">
                                                                            Forward
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#">
                                                                            Delete
                                                                        </DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </PerfectScrollbar>
                                    </div>
                                </div>
                                <div className="p-3 chat-input-section">
                                        <Row>
                                            <div className="col">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control chat-input rounded" onKeyPress={onKeyPress} onChange={e => setcurMessage(e.target.value)} placeholder="Enter Message..." />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <Button type="submit" color="primary" className="chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end"></i></Button>
                                            </div>
                                        </Row>
                                    </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

Chat.propTypes = {
    chats: PropTypes.array,
    groups: PropTypes.array,
    messages: PropTypes.array,
    onGetChats: PropTypes.func,
    onGetGroups: PropTypes.func,
    onGetMessages: PropTypes.func,
    onAddMessage: PropTypes.func,
}

const mapStateToProps = ({ chat }) => ({
    chats: chat.chats,
    groups: chat.groups,
    messages: chat.messages,
})

const mapDispatchToProps = dispatch => ({
    onGetChats: () => dispatch(getChats()),
    onGetGroups: () => dispatch(getGroups()),
    onGetMessages: roomId => dispatch(getMessages(roomId)),
    onAddMessage: roomId => dispatch(addMessage(roomId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)