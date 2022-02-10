/* eslint-disable import/no-cycle */
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { TextField, Button, ButtonGroup } from '@mui/material'
import useStore from '../../hooks/useStore'

const CommentEditForm = ({ comment }) => {
  const [commentValue, setCommentValue] = useState(comment.text)
  const { comments } = useStore()
  const updateComment = event => {
    setCommentValue(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    comments.editComment(comment.id, commentValue)
    setCommentValue('')
  }
  const handleCancel = () => {
    comments.toggleEdit(comment.id)
  }
  const handleDelete = () => {
    comments.deleteComment(comment.id)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        size="small"
        type="text"
        name="comment"
        label="Comment"
        onChange={updateComment}
        value={commentValue}
      />
      <ButtonGroup>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
        >
          Save
        </Button>
        <Button
          color="secondary"
          variant="contained"
          disableElevation
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          color="error"
          variant="contained"
          disableElevation
          onClick={handleDelete}
        >
          Delete
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default observer(CommentEditForm)
