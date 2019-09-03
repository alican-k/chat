import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { flex, font, button }  from '../../styles'

const Button = ({ containerStyle={}, textStyle={}, isActive=true, label, onPress }) => {
	const _containerStyle = [
		isActive ? styles.containerActive : styles.containerInactive,
		containerStyle
	]
	const _textStyle = [
		isActive ? font.button : font.buttonInactive,
		textStyle
	]
	return (
		<TouchableOpacity 
			onPress={onPress} 
			disabled={!isActive}
			style={_containerStyle}
		>
			<Text style={_textStyle}>{label}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	containerActive: {
		...flex.rowCenterCenter,
		...button.primary
	},
	containerInactive: {
		...flex.rowCenterCenter,
		...button.inactive
	},
})