import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Navigator from './Navigator'
import NavigationService from './services/NavigationService'

const store = configureStore()

const App = () =>
	<Provider store={store}>
		<Navigator ref={NavigationService.setTopLevelNavigator} />
	</Provider>

export default App
	