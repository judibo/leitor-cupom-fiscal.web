import React, { useState } from "react"
import FileUploader from "./fileUploader"
import FileList from "./fileList"
import { CardContent } from "@mui/material"
import fileService from "../../services/fileService"

const FileCard = ({ setInfoCupom }) => {
  const [files, setFiles] = useState()
  const [image, setImage] = useState('')

  const onUpload = (base64, file) => {
    setInfoCupom(files)
    setFiles(base64)
    setImage(file)

    fileService.addFile(files).then(response => response)
  }

  return (
    <CardContent>
      <h3>Cupom fiscal</h3>
      <FileUploader
        onFileSelectSuccess={(file) => setSelectedFile(file)}
        onFileSelectError={({ error }) => alert(error)}
        onUpload={onUpload}
      />
      <FileList image={image}/>
    </CardContent>
  )
}
export default FileCard
