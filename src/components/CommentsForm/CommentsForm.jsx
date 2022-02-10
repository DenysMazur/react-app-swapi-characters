/* eslint-disable import/no-cycle */
import React, { useState } from 'react'
import { TextField, Button, ButtonGroup } from '@mui/material'
import useStore from '../../hooks/useStore'

const CommentsForm = ({ character }) => {
  const [commentValue, setCommentValue] = useState('')
  const { comments } = useStore()
  const updateComment = event => {
    setCommentValue(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    comments.addComment(character, commentValue)
    setCommentValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <ButtonGroup>
        <TextField
          size="small"
          type="text"
          name="comment"
          label="Comment"
          onChange={updateComment}
          value={commentValue}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
        >
          Add Comment
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default CommentsForm
