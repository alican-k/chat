import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from '../UiKit'

const ChatHistoryError = ({ tryAgain }) => 
	<View style={styles.container}>
		<Text>Error while loading the chat history.</Text>
		<Text>Please try again!</Text>
		<Button 
			label='Try Again' 
			onPress={() => tryAgain()} 
			containerStyle={styles.button}
		/>
	</View>

export default ChatHistoryError

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		marginTop: 20,
		alignSelf: 'stretch'
	}
})