import React, { useEffect, useState } from 'react'
import { View, Keyboard, Platform } from 'react-native'

/*
 * As it says in the react native KeyboardAwareScrollView document, we can use 
 * our own implementation. With saying this, KeyboardAwareScrollView did not work properly for sticky footer, 
 * So here our own implementation. 
 * 
 * This component returns a view with a padding equal to keyboard height.
 * 
 * NOTE: On android, this is not necessary when androidManifest is configured as:
 * 		android:windowSoftInputMode="adjustResize"
*/

const ViewWithKeyboardPadding = ({ children, containerStyle }) => {
	const [height, setHeight] = useState(0)

	useEffect(() => {
		const keyboardDidShow = e => setHeight(e.endCoordinates.height)
		const keyboardWillHide = () => setHeight(0)

		Keyboard.addListener('keyboardDidShow', keyboardDidShow)
		Keyboard.addListener('keyboardWillHide', keyboardWillHide)

		return () => {
			Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
			Keyboard.removeListener('keyboardWillHide', keyboardWillHide)
		}
	}, [])

	const paddingBottom = Platform.OS === 'android' ? 0 : height
	const style = [containerStyle, { paddingBottom }]

	return (
		<View style={style}>
			{ children }
		</View>
	)
}

export default ViewWithKeyboardPadding