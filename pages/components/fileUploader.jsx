import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Container, UploadContainer } from "./styles"
import { CloudUpload, CameraAlt } from "@material-ui/icons"
import { Fab } from "@mui/material"

const FileUploader = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onUpload(acceptedFiles)
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
  })

  return (
    <Container>
      <UploadContainer
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} capture="environment" />
        <CloudUpload fontSize="large" />
        <p>Arraste e solte o arquivo</p>
        <p style={{ fontSize: "10px", color: "#3963cb" }}>ou selecione</p>
      </UploadContainer>
      <Fab
        color="primary"
        aria-label="add"
        className="add-photo"
        component="label"
      >
        <input {...getInputProps()} capture="environment" hidden />
        <CameraAlt />
      </Fab>
    </Container>
  )
}

export default FileUploader
