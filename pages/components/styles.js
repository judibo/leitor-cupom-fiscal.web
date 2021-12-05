import styled from "styled-components"

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#3b68d9"
  }
  if (props.isDragReject) {
    s
    return "#ff1744"
  }
  if (props.isDragActive) {
    return "#3b68d9"
  }
  return "#d6ebee"
}

export const Container = styled.div`
  padding: 0;
  .add-photo {
    margin: -20px 10px;
    float: right;
  }
`
export const UploadContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #303030;
  outline: none;
  transition: border 0.24s ease-in-out;
`
export const ListItem = styled.li`
  list-style-type: none;
  border-top: 1px solid #d6ebee;
  margin: 10px 0;
  padding: 1rem;
  align-items: center;
`

export const FileListContainer = styled.p`
  margin-top: 4rem;
`
export const ListItemInfo = styled.p`
  display: flex;
  justify-content: space-between;
  text-overflow: ellipsis;
  overflow: auto;
`
export const ListItemDetail = styled.p`
  font-size: 10px;
`
export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const UploadPhotoButton = styled.div`
  margin: -20px 10px;
  float: right;
`
