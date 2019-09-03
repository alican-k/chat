import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { chatHistoryRequest, nicknameRemoveRequest, sendMessage } from '../../store/action'
import Header from './Header'
import FlatMessages from './FlatMessages'
import WriteMessage from './WriteMessage'
import ChatHistoryError from './ChatHistoryError'
import { ActivityIndicator, Screen, KeyboardHeightProvider, ViewWithKeyboardPadding } from '../UiKit'
import { _messagesStatus } from '../../types'

const ScreenChat = ({ 
	chatHistoryRequest,
	nickname, nicknameRemoveRequest, 
	messages, messagesStatus, newestMessageId,
	userId,
	sendMessage
}) => {

	const loading = messagesStatus === _messagesStatus.NONE || messagesStatus === _messagesStatus.LOADING
	const loaded = messagesStatus === _messagesStatus.LOADED
	const error = messagesStatus === _messagesStatus.ERROR

	useEffect(() => {
		chatHistoryRequest()
	}, [])

	return (
		<Screen>
			<ViewWithKeyboardPadding containerStyle={styles.flex1}>
				<Header nickname={nickname} onBack={nicknameRemoveRequest} />

				{loading && <ActivityIndicator full />}

				{loaded && (
					<FlatMessages 
						messages={messages} 
						newestMessageId={newestMessageId} 
						currentUserId={userId} 
					/>
				)}

				{error && <ChatHistoryError tryAgain={chatHistoryRequest} />}

				<WriteMessage onSend={text => sendMessage(text, Date.now())} />
			</ViewWithKeyboardPadding>
		</Screen>
	)
}

export default connect(
	({ nickname, messagesStatus, messages, newestMessageId, userId }) => 
		({ nickname, messages, messagesStatus, newestMessageId, userId }),
	{ chatHistoryRequest, nicknameRemoveRequest, sendMessage }
)(ScreenChat)

const styles = StyleSheet.create({
	flex1: {
		flex: 1
	}
})