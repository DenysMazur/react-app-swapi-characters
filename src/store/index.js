import { types } from 'mobx-state-tree'
import CharactersStore from './characters'
import CommentsStore from './comments'

const RootStore = types.model('RootStore', {
  characters: types.optional(CharactersStore, {}),
  comments: types.optional(CommentsStore, {})
})

export default RootStore
