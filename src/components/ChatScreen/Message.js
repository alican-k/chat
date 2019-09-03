import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { flex, color, font } from '../../styles'

/*
 * Props of a message has three combination:
 * 1. Sent message
 * 2. Incoming message with an avatar.
 * 3. Incoming message without an avatar (Avatar is needed to display only for the first message of the consequtive messages)
*/

const Message = ({ isSent, isConsecutive, message }) => {
	const containerStyle = [
		isSent ? styles.sentContainer : styles.incomingContainer,
		isConsecutive ? styles.consecutiveContainer : styles.nonConsecutiveContainer
	]
	const messageStyle = isSent ? styles.sentMessage : styles.incomingMessage

	return (
		<View style={containerStyle}>
			{!isSent && !isConsecutive && (
				<Image 
					source={{uri: message.user.avatarUrl}} 
					style={styles.avatar} 
				/>
			)}

			{!isSent && isConsecutive && <View style={styles.avatarNone} />}

			<View style={messageStyle}>
				<Text>{message.text}</Text>
			</View>
		</View>
	)
}

export default Message

const styles = StyleSheet.create({
	incomingContainer: {
		...flex.rowStartStart,
		alignSelf: 'flex-start',
		marginRight: 120,
	},
	sentContainer: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginLeft: 120,
		marginRight: 8
	},
	consecutiveContainer: {
		marginTop: 4,
	},
	nonConsecutiveContainer: {
		marginTop: 12,
	},
	avatar: {
		width: 38,
		height: 38,
		borderRadius: 19,
		marginHorizontal: 8,
		resizeMode: 'cover'
	},
	avatarNone: {
		width: 38,
		marginHorizontal: 8,
	},
	incomingMessage: {
		padding: 10,
		backgroundColor: color.GREY_LIGHTEST,
		borderRadius: 5,
	},
	sentMessage: {
		padding: 10,
		backgroundColor: color.SENT_BACKGROUND,
		borderRadius: 8,
	},
})