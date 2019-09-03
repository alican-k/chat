import { pipe, from, throwError } from "rxjs"
import { switchMap, delay } from "rxjs/operators";

const historyUrl = 'https://jsonblob.com/api/jsonBlob/4f421a10-5c4d-11e9-8840-0b16defc864d'

const fetchChatHistory = () => 
	from(fetch(historyUrl)).pipe(
		switchMap(res => res.json()),
	)

export default { fetchChatHistory }
