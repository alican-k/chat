import { compose, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import rootEpic from './epic'

const epicMiddleware = createEpicMiddleware()

export default configureStore = () => {
	const composeEnhancers = composeWithDevTools
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(epicMiddleware))
	)
	
	epicMiddleware.run(rootEpic)

	return store 
}
