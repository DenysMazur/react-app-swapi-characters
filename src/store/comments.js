import { destroy, types } from 'mobx-state-tree'
import { v4 as uuidv4 } from 'uuid'
import { Character } from './characters'

const Comment = types
  .model('Comment', {
    id: types.identifier,
    text: types.string,
    character: types.reference(Character),
    isEdited: false
  })
  .actions(self => {
    return {
      toggleEdit() {
        self.isEdited = !self.isEdited
      },
      edit(newText) {
        self.text = newText
      }
    }
  })

const CommentsStore = types
  .model('CommentsStore', {
    comments: types.array(Comment)
  })
  .views(self => {
    return {
      receiveCommentsByCharacter(character) {
        return self.comments.filter(comment => comment.character === character)
      }
    }
  })
  .actions(self => {
    return {
      addComment(character, content) {
        const comment = Comment.create({
          id: uuidv4(),
          text: content,
          character: character
        })
        self.comments.push(comment)
      },
      toggleEdit(id) {
        const currentComment = self.comments.find(comment => comment.id === id)
        currentComment.toggleEdit()
      },
      editComment(id, text) {
        const currentComment = self.comments.find(comment => comment.id === id)
        currentComment.edit(text)
        currentComment.toggleEdit()
      },
      deleteComment(id) {
        const currentComment = self.comments.find(comment => comment.id === id)
        destroy(currentComment)
      }
    }
  })

export default CommentsStore
