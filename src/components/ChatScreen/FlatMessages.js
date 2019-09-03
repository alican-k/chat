import React, { useEffect, useRef } from 'react'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import { withProps } from 'recompose'
import { reverse } from 'ramda'
import Message from './Message'
import { flex } from '../../styles'

/*
 * Messages are taken ascending order from the API but we make it descending.
 * Also we make the Flatlist inverted.
 * By the help of these two, appearence fits better with our needs and programmatically scroll operations become easier.
*/

const FlatMessages = ({ messages, newestMessageId, currentUserId }) => {
	const listRef = useRef(null)

	useEffect(() => {
		listRef.current.scrollToOffset({offset: 0, animated: true})
	}, [newestMessageId])

	return (
		<FlatList
			inverted
			ref={listRef}
			keyExtractor={item => item.id + ' '}
			data={messages}
			renderItem={({item, index}) => {
				const isSent = item.user.id === currentUserId
				
				/* this indicates if the previous message is sent by the same user with the current message item */
				const isConsecutive = index > 0 && messages[index - 1].user.id === item.user.id
				
				return (
					<Message 
						isSent={isSent} 
						isConsecutive={isConsecutive} 
						message={item} 
					/>
				)
			}}
			style={styles.flatList}
		/>
	)
}

export default withProps(
	({ messages }) => ({ messages: reverse(messages) })
)(FlatMessages)


const styles = StyleSheet.create({
	flatList: {
		flex: 1,
	},
})