import { takeEvery, put, call } from "redux-saga/effects"

// Chat Redux States
import {
  GET_CHATS,
  GET_GROUPS,
  GET_MESSAGES,
  POST_ADD_MESSAGE,
} from "./actionTypes"
import {
  getChatsSuccess,
  getChatsFail,
  getGroupsSuccess,
  getGroupsFail,
  getMessagesSuccess,
  getMessagesFail,
  addMessageSuccess,
  addMessageFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getChats,
  getGroups,
  getMessages,
  addMessage,
} from "../../helpers/fakebackend_helper"

function* onGetChats() {
  try {
    const response = yield call(getChats)
    yield put(getChatsSuccess(response))
  } catch (error) {
    yield put(getChatsFail(error))
  }
}

function* onGetGroups() {
  try {
    const response = yield call(getGroups)
    yield put(getGroupsSuccess(response))
  } catch (error) {
    yield put(getGroupsFail(error))
  }
}

function* onGetMessages({ roomId }) {
  try {
    const response = yield call(getMessages, roomId)
    yield put(getMessagesSuccess(response))
  } catch (error) {
    yield put(getMessagesFail(error))
  }
}

function* onAddMessage({ message }) {
  try {
    const response = yield call(addMessage, message)
    yield put(addMessageSuccess(response))
  } catch (error) {
    yield put(addMessageFail(error))
  }
}

function* chatSaga() {
  yield takeEvery(GET_CHATS, onGetChats)
  yield takeEvery(GET_GROUPS, onGetGroups)
  yield takeEvery(GET_MESSAGES, onGetMessages)
  yield takeEvery(POST_ADD_MESSAGE, onAddMessage)
}

export default chatSaga
