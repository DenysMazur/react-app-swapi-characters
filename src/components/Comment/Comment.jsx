/* eslint-disable import/no-cycle */
import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Button } from '@mui/material'
import useStore from '../../hooks/useStore'
import CommentEditForm from '../CommentEditForm/CommentEditForm'

const Comment = ({ comment }) => {
  const { comments } = useStore()
  const handleChangeEdit = () => {
    comments.toggleEdit(comment.id)
  }
  return comment.isEdited ? (
    <CommentEditForm comment={comment} />
  ) : (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        margin: '5px 0'
      }}
    >
      <Box>{comment.text}</Box>
      <Button
        color="secondary"
        onClick={handleChangeEdit}
        size="small"
        variant="outlined"
      >
        Edit
      </Button>
    </Box>
  )
}

export default observer(Comment)
