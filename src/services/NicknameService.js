import { AsyncStorage } from 'react-native'
import { from, of, pipe } from 'rxjs'
import { delay } from 'rxjs/operators'

/*
 * Nickname is stored in AsyncStorage instead of firebase.
 * This is checked with Şahin => I had exprience with firebase but 
 * in this project async storage is a simpler solution.
*/

/*
 * Delays are not required, they are just for demonstration. 
*/

const fetchNickname = () => 
	from(AsyncStorage.getItem('@LEO: nickname'))
		.pipe(delay(800))

const saveNickname = nickname => 
	from(AsyncStorage.setItem('@LEO: nickname', nickname))
		.pipe(delay(800))

const removeNickname = () =>
	from(AsyncStorage.removeItem('@LEO: nickname'))

export default { fetchNickname, saveNickname, removeNickname }