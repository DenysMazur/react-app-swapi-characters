/* eslint-disable import/no-cycle */
import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CommentsForm from '../CommentsForm/CommentsForm'
import CommentsView from '../CommentsView/CommentsView'

const StyledTableCell = styled(TableCell)(({ theme }) => {
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: 16
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }
})

const StyledTableRow = styled(TableRow)(({ theme }) => {
  return {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }
})

const CharacterTable = ({ characters }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 375 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">Number</StyledTableCell>
          <StyledTableCell align="center">Character Name</StyledTableCell>
          <StyledTableCell align="center">Birth Year</StyledTableCell>
          <StyledTableCell align="center">Comments</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {characters.characters.map((row, index) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell align="center">{`${index + 1}`}</StyledTableCell>
            <StyledTableCell align="center">{row.name}</StyledTableCell>
            <StyledTableCell align="center">{row.birth_year}</StyledTableCell>
            <StyledTableCell align="center">
              <CommentsView character={row} />
              <CommentsForm character={row} />
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default observer(CharacterTable)
