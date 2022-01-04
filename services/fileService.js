import axios from 'axios'
import environment from '../config/Config'

async function addFile(file) {
	const fileSent = await axios
		.post(`${environment.urlFileReader}`, file)
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
	return fileSent
}

export default { addFile }
