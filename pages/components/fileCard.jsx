import React, { useState } from "react"
import FileUploader from "./fileUploader"
import FileList from "./fileList"
import { CardContent } from "@mui/material"

const FileCard = ({ setInfoCupom }) => {
  const [files, setFiles] = useState([])

  const onUpload = (files) => {
    setInfoCupom(files)
    setFiles(files)
  }

  return (
    <CardContent>
      <h3>Cupom fiscal</h3>
      <FileUploader
        onFileSelectSuccess={(file) => setSelectedFile(file)}
        onFileSelectError={({ error }) => alert(error)}
        onUpload={onUpload}
      />
      <FileList files={files} />
    </CardContent>
  )
}
export default FileCard
