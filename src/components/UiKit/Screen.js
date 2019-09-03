import React from 'react'
import { View, StyleSheet } from 'react-native'

const Screen = ({ children }) => 
	<View style={styles.container}>
		<View style={styles.underStatus} />
		{ children }
	</View>

export default Screen

const styles = {
	container: {
		flex: 1,
	},
	underStatus: {
		height: 20,
	}
}