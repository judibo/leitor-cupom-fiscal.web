import React, { useState } from 'react'
import FileUploader from './fileUploader'
import FileList from './fileList'
import { CardContent } from '@mui/material'
import fileService from '../../services/fileService'

const FileCard = ({ setInfoCupom }) => {
	const [file, setFile] = useState()
	const [image, setImage] = useState('')

	const onUpload = (base64, file) => {
    setFile(base64)
		setImage(file)
    
		fileService
    .addFile({
      imagemBase64: base64.replace('data:image/png;base64,', '')
    })
    .then((response) => setInfoCupom(response))
    
	}

	return (
		<CardContent>
			<h3>Cupom fiscal</h3>
			<FileUploader
				onFileSelectSuccess={(file) => setSelectedFile(file)}
				onFileSelectError={({ error }) => alert(error)}
				onUpload={onUpload}
			/>
			<FileList image={image} />
		</CardContent>
	)
}
export default FileCard
