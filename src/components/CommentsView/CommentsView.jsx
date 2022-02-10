/* eslint-disable import/no-cycle */
import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box } from '@mui/material'
import useStore from '../../hooks/useStore'
import Comment from '../Comment/Comment'

const CommentsView = ({ character }) => {
  const { comments } = useStore()
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {comments.receiveCommentsByCharacter(character)?.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </Box>
  )
}

export default observer(CommentsView)
