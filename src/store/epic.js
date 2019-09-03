import { mapTo, map, switchMap, mergeMap, tap, ignoreElements, delay, catchError, timeout, retry } from 'rxjs/operators'
import { of,  } from 'rxjs'
import { ofType, combineEpics } from 'redux-observable'
import NicknameService from '../services/NicknameService'
import NavigationService from '../services/NavigationService'
import ChatService from '../services/ChatService'
import { types, nicknameFetched, nicknameFulfilled, nicknameRemoveFulfilled, chatHistoryFulfilled, chatHistoryError } from './action'

/*
 * Nickname is stored in AsyncStorage instead of firebase.
 * This is checked with Şahin => I had exprience with firebase but 
 * in this project async storage is a simpler solution.
*/

const nicknameFetchEpic = action$ => action$.pipe(
	ofType(types.NICKNAME_FETCH),
	switchMap(() => NicknameService.fetchNickname()),
	map(nicknameFetched)
)

const nicknameSubmitEpic = action$ => action$.pipe(
	ofType(types.NICKNAME_SUBMIT),
	switchMap(action => NicknameService.saveNickname(action.payload.nickname)),
	mapTo(nicknameFulfilled())
)

const nicknameRemoveRequestEpic = action$ => action$.pipe(
	ofType(types.NICKNAME_REMOVE_REQUEST),
	switchMap(() => NicknameService.removeNickname()),
	tap(() => NavigationService.back()),
	delay(100),
	mapTo(nicknameRemoveFulfilled())
)

const chatStartEpic = action$ => action$.pipe(
	ofType(types.CHAT_START),
	tap(() => NavigationService.navigate('Chat')),
	ignoreElements()
)

const chatHistoryRequestEpic = action$ => action$.pipe(
	ofType(types.CHAT_HISTORY_REQUEST),
	switchMap(() => ChatService.fetchChatHistory().pipe(
		map(chatHistoryFulfilled),
		catchError(err => of(chatHistoryError())),
	)),
)

export default combineEpics(
	nicknameFetchEpic, 
	nicknameSubmitEpic,
	nicknameRemoveRequestEpic, 
	chatStartEpic,
	chatHistoryRequestEpic
)
