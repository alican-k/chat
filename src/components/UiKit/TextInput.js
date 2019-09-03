import React, { useState } from 'react'
import { TextInput as TextInputRN } from 'react-native'
import { flex, button, color, font, input }  from '../../styles'

const TextInput = ({ style={}, placeholder, value, onChangeText, isError }) => {

	const [isActive, setIsActive] = useState(false)

	const inputStyle = [
		input.base,
		isActive ? input.active : {},
		isError ? input.error : {},
		isError & isActive ? input.errorActive : {},
		style
	]

	const placeholderTextColor = isActive ? color.DARK : color.DARK_LIGHT

	return (
		<TextInputRN
			style={inputStyle} 
			placeholder={placeholder} 
			placeholderTextColor={placeholderTextColor} 
			value={value}
			onChangeText={onChangeText}
			onFocus={() => setIsActive(true)}
			onBlur={() => setIsActive(false)}
		/>
	)
}

export default TextInput
