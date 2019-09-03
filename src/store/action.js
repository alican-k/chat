const ac = (type, payload) => ({type, payload})

const NICKNAME_FETCH = 'NICKNAME_FETCH'
const NICKNAME_FETCHED = 'NICKNAME_FETCHED'
const NICKNAME_SUBMIT = 'NICKNAME_SUBMIT'
const NICKNAME_FULFILLED = 'NICKNAME_FULFILLED'
const NICKNAME_REMOVE_REQUEST = 'NICKNAME_REMOVE_REQUEST'
const NICKNAME_REMOVE_FULFILLED = 'NICKNAME_REMOVE_FULFILLED'
const CHAT_START = 'CHAT_START'
const CHAT_HISTORY_REQUEST = 'CHAT_HISTORY_REQUEST'
const CHAT_HISTORY_FULFILLED = 'CHAT_HISTORY_FULFILLED'
const CHAT_HISTORY_ERROR = 'CHAT_HISTORY_ERROR'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const nicknameFetch = () => ac(NICKNAME_FETCH)

export const nicknameFetched = (nickname) => ac(NICKNAME_FETCHED, { nickname })

export const nicknameSubmit = (nickname) => ac(NICKNAME_SUBMIT, { nickname })

export const nicknameFulfilled = () => ac(NICKNAME_FULFILLED)

export const nicknameRemoveRequest = () => ac(NICKNAME_REMOVE_REQUEST)

export const nicknameRemoveFulfilled = () => ac(NICKNAME_REMOVE_FULFILLED)

export const chatStart = () => ac(CHAT_START)

export const chatHistoryRequest = () => ac(CHAT_HISTORY_REQUEST)

export const chatHistoryFulfilled = (messages) => ac(CHAT_HISTORY_FULFILLED, { messages })

export const chatHistoryError = () => ac(CHAT_HISTORY_ERROR)

export const sendMessage = (text, timestamp) => ac(SEND_MESSAGE, { text, timestamp })

export const types = {
	NICKNAME_FETCH,
	NICKNAME_FETCHED,
	NICKNAME_SUBMIT,
	NICKNAME_FULFILLED,
	NICKNAME_REMOVE_REQUEST,
	NICKNAME_REMOVE_FULFILLED,
	CHAT_START,
	CHAT_HISTORY_REQUEST,
	CHAT_HISTORY_FULFILLED,
	CHAT_HISTORY_ERROR,
	SEND_MESSAGE,
}
