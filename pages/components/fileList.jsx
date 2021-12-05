import React from "react"
import { Delete } from "@material-ui/icons"
import { ListItem, ListItemInfo, ListItemDetail, FileListContainer } from "./styles"
import filesize from "filesize"

const FileList = ({ files }) => {
  return (
    <FileListContainer>
      {files.map((file) => (
        <ListItem key={file}>
          <ListItemInfo>
            <p>{file.name}</p>
            <Delete onClick={() => console.log("Deletar arquivo")}/>
          </ListItemInfo>
          <ListItemDetail>{filesize(file.size)}</ListItemDetail>
        </ListItem>
      ))}
    </FileListContainer>
  )
}

export default FileList
