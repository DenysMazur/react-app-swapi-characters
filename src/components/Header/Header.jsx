import * as React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar sx={{ justifyContent: 'center' }}>
      <Typography variant="h6" component="div">
        SWAPI CHARACTERS
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
