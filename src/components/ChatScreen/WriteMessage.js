import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { font, flex, color } from '../../styles'
import { TextInput, Button } from '../UiKit'

const WriteMessage = ({ onSend }) => {
	const [text, setText] = useState('')

	return (
		<View style={styles.container}>
			<TextInput 
				placeholder='Write a message'
				value={text}
				onChangeText={setText}
				style={styles.input}
			/>
			<Button
				label='Send' 
				isActive={Boolean(text)} 
				onPress={() => {
					onSend(text)
					setText('')
				}} 
				containerStyle={styles.rounded}
			/>
		</View>
	)
}

export default WriteMessage

const styles = StyleSheet.create({
	container: {
		...flex.rowStartCenter,
		padding: 10,
	},
	input: {
		flex: 1,
	},
	rounded: {
		borderRadius: 25,
		paddingHorizontal: 16,
		marginLeft: 8
	}
})