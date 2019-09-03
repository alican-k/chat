import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { nicknameFetch, nicknameSubmit, chatStart } from '../../store/action'
import { font } from '../../styles'
import { ActivityIndicator, Screen } from '../UiKit'
import NickNameForm from './NickNameForm'
import { _nicknameStatus } from '../../types'

const Home = ({ nicknameStatus, nicknameFetch, nicknameSubmit, chatStart }) => {

	useEffect(() => {
		if(nicknameStatus === _nicknameStatus.NONE)
			nicknameFetch()
		if(nicknameStatus === _nicknameStatus.EXISTS)
			chatStart()
	}, [nicknameStatus])

	const isAbsentOrSaving = nicknameStatus === _nicknameStatus.ABSENT || nicknameStatus === _nicknameStatus.SAVING
	const isLoading = nicknameStatus === _nicknameStatus.NONE || nicknameStatus === _nicknameStatus.CHECKING
	const isOperating = nicknameStatus === _nicknameStatus.SAVING

	return (
		<Screen>
			<View style={styles.logoContainer}>
				<Text style={[font.logo, styles.logo]}>LEO</Text>
				<Text style={font.logoSub}>Redefine What Is Possible</Text>
			</View>
			{ isAbsentOrSaving && 
				<NickNameForm onSubmit={nicknameSubmit} isOperating={isOperating} /> 
			}
			{ isLoading && <ActivityIndicator /> }
		</Screen>
	)
}

export default connect(
	({ nicknameStatus }) => ({ nicknameStatus }),
	{ nicknameFetch, nicknameSubmit, chatStart }
)(Home)

const styles = StyleSheet.create({
	logoContainer: {
		alignItems: 'center',
		marginVertical: 40
	},
	logo: {
		marginBottom: 20,
	}
})