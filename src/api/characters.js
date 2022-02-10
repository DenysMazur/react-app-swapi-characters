import axios from 'axios'

export const getAllCharacters = (url = 'https://swapi.dev/api/people/') =>
  axios.get(url).then(response => response.data)
