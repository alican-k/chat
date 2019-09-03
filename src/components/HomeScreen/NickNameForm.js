import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ActivityIndicator, TextInputWithFormData, Button } from '../UiKit'
import { flex, button, color, font }  from '../../styles'

/*
 * Error message is shown when the input is not valid.
 * But we wait to display the error message until to the first submit attempt.
*/

const NickNameForm = ({ isOperating, onSubmit }) => {
	const [nickname, setNickname] = useState('')
	const [isDirty, setIsDirty] = useState(false)

	const isValid = nickname.length > 2
	const isError = isDirty && !isValid
	
	return (
		<View style={styles.container}>
			<TextInputWithFormData 
				label='Email'
				placeholder='Enter your nick name' 
				value={nickname}
				isError={isError}
				error='At least 3 characters!'
				onChangeText={setNickname}
			/>
			{ !isOperating
				? (
					<Button 
						label='Enter' 
						isActive={true}
						isError={isError}
						onPress={() => {
							setIsDirty(true)
							if(isValid) onSubmit(nickname)
							else console.log('invalid')
						}}
					/>
				)
				: <ActivityIndicator />
			}
		</View>
	)
}

export default NickNameForm

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
})