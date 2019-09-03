import { _messagesStatus, _nicknameStatus } from '../types'
import { types } from './action'

/*
 * User id and userAvatar are constants but we have put them in redux state because 
 * in a real project they will most probably be held in redux state
*/

const initialState = {
	userId: '@currentUserId',
	userAvatarUrl: 'https://avatars2.githubusercontent.com/u/1812500?s=460&v=4',
	nicknameStatus: _nicknameStatus.NONE,
	nickname: null,
	messagesStatus: _messagesStatus.NONE,
	messages: null,
	newestMessageId: -1,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.NICKNAME_FETCH: {
			const nicknameStatus = _nicknameStatus.CHECKING
			return { ...state, nicknameStatus }
		}
		case types.NICKNAME_FETCHED: {
			const { nickname } = action.payload
			const nicknameStatus = nickname ? _nicknameStatus.EXISTS : _nicknameStatus.ABSENT
			return { ...state, nickname, nicknameStatus }
		}
		case types.NICKNAME_SUBMIT: {
			const nicknameStatus = _nicknameStatus.SAVING
			const { nickname } = action.payload
			return { ...state, nicknameStatus, nickname }
		}
		case types.NICKNAME_FULFILLED: {
			const nicknameStatus = _nicknameStatus.EXISTS
			return { ...state, nicknameStatus }
		}
		case types.NICKNAME_REMOVE_REQUEST: {
			const nicknameStatus = _nicknameStatus.ABSENT
			return { ...state, nicknameStatus }
		}
		case types.NICKNAME_REMOVE_FULFILLED: {
			const nickname = null
			return {...state, nickname}
		}
		case types.CHAT_START: {
			const messagesStatus = _messagesStatus.NONE
			return { ...state, messagesStatus }
		}
		case types.CHAT_HISTORY_REQUEST: {
			const messagesStatus = _messagesStatus.LOADING
			return { ...state, messagesStatus }
		}
		case types.CHAT_HISTORY_FULFILLED: {
			const { messages } = action.payload
			const messagesStatus = _messagesStatus.LOADED
			return { ...state, messagesStatus, messages }
		}
		case types.CHAT_HISTORY_ERROR: {
			const messagesStatus = _messagesStatus.ERROR
			return { ...state, messagesStatus }
		}
		case types.SEND_MESSAGE: {
			const { text, timestamp } = action.payload
			const message = {
				id: timestamp,
				user: {
					id: state.userId,
					name: state.nickname,
					avatarUrl: state.userAvatarUrl,
				},
				text,
				timestamp
			}
			const messages = [...state.messages, message]
			const newestMessageId = timestamp
			return { ...state, messages, newestMessageId }
		}
		default:
			return state
	}
}

export default reducer