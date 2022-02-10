/* eslint-disable camelcase */
import { flow, types } from 'mobx-state-tree'
import { getAllCharacters } from '../api/characters'

export const Character = types.model('Character', {
  name: types.identifier,
  birth_year: types.string
})

const CharactersStore = types
  .model('CharactersStore', {
    characters: types.array(Character)
  })
  .actions(self => {
    return {
      load: flow(function* load(url = '') {
        try {
          let data = ''
          if (url === '') {
            data = yield getAllCharacters()
          } else data = yield getAllCharacters(url)
          data.results.forEach(({ name, birth_year }) => {
            const newCharacter = Character.create({
              name,
              birth_year
            })
            self.characters.push(newCharacter)
          })
          if (data.next) {
            self.load(data.next)
          }
        } catch (error) {
          console.log('Failed to fetch data', error)
        }
      }),
      afterCreate() {
        self.load()
      }
    }
  })

export default CharactersStore
