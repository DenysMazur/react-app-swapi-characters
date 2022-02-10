/* eslint-disable import/no-cycle */
import React from 'react'
import { Toolbar, Box } from '@mui/material'
import CharacterTable from '../CharacterTable/CharacterTable'
import useStore from '../../hooks/useStore'

const Main = () => {
  const { characters } = useStore()
  return (
    <>
      <Toolbar />
      <Box>
        <CharacterTable characters={characters} />
      </Box>
    </>
  )
}

export default Main
