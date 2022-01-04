import React from "react"
import { Delete } from "@material-ui/icons"
import { ListItem, ListItemInfo, ListItemDetail, FileListContainer } from "./styles"
import filesize from "filesize"

const FileList = ({ image }) => {
  return (
    <FileListContainer>
      {image &&
        <ListItem key={image}>
          <ListItemInfo>
            <p>{image.name}</p>
          </ListItemInfo>
          <ListItemDetail>{filesize(image.size)}</ListItemDetail>
        </ListItem>
      } 
    </FileListContainer>
  )
}

export default FileList
