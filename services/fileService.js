import axios from 'axios'
import environment from '../config/Config'

async function addFile(file) {
	const fileSent = await axios
		.post(`${environment.urlFileReader}`, file)
		.then(response => response.data)
		.catch(function (error) {
			console.log(error)
		})
	return fileSent
}

export default { addFile }
