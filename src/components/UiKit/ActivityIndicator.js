import React from 'react'
import { ActivityIndicator as ActivityRN, View, StyleSheet } from 'react-native'

/*	
 * Additional to React Native's Activity Indicator props, two props can be given: containerStyle and full.
 * if full is true, surrounding container will have full width and height (flex: 1).
 * Also, any style prop can be passed with containerStyle.
*/

const ActivityIndicator = ({ containerStyle={}, full=false, ...props}) => {
	const style = [
		styles.container, 
		full ? styles.full : {},
		containerStyle,
	]
	return (
		<View style={style}>
			<ActivityRN size='large' {...props} />
		</View>
	)
}

export default ActivityIndicator

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	full: {
		flex: 1
	}
})