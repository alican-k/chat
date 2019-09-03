import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { flex, color, font } from '../../styles'
import { left } from '../../assets'

const Header = ({ nickname, onBack }) => {
	return (
		<View style={styles.container}>
			{/* 
				Instead of a touchable image a reusable IconButton component can be better. But,
				for the scope of this project this is just fine since it is used only here.
			*/}
			<TouchableOpacity onPress={onBack} style={styles.iconContainer}>
				<Image style={styles.icon} source={left} />
			</TouchableOpacity>
			<Text style={font.headerTitle}>{nickname}</Text>
			<View style={styles.right} />
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		...flex.rowBetweenCenter,
		height: 64,
		borderBottomWidth: 1,
		borderBottomColor: color.GREY_LIGHT,
	},
	iconContainer: {
		padding: 8
	},
	icon: {
		width: 36,
		height: 36,
		resizeMode: 'cover',
		tintColor: color.DARK_LIGHT
	},
	right: {
		width: 40
	}
})