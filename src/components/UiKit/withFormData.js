import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { flex, font } from '../../styles'

/*
 * A HOC that transforms a component which takes three additional prop and by the help of them, 
 * displays a label and error messages 
*/

const withFormData = Component => (props) => {
	const { label, error, isError } = props
	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<Component {...props} />
			<View style={styles.labelContainer}>
				{isError && 
					<Text style={styles.error}>{error}</Text>
				}
			</View>
		</View>
	)
}

export default withFormData

const styles = StyleSheet.create({
	label: {
		marginLeft: 12,
		marginBottom: 10,
		...font.inputLabel
	},
	error: {
		...font.inputError,
		marginLeft: 12,
		marginTop: 2,
	},
	labelContainer: {
		height: 22,
	}
})