import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from './components/HomeScreen'
import Chat from './components/ChatScreen'

const AppNavigator = createStackNavigator({
	Home: { 
		screen: Home, 
		navigationOptions: { 
			header: null
		} 
	},
	Chat: { 
		screen: Chat, 
		navigationOptions: { 
			header: null
		} 
	},
})

export default createAppContainer(AppNavigator)