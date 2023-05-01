import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, ThemeProvider, createTheme } from '@mui/system';

function createData(
  name: string,
  Uni1: number,
  Uni2: number,
) {
  return { name, Uni1, Uni2 };
}

const rows = [
  createData('Stat 1', 159, 6.0),
  createData('Stat 2', 237, 9.0),
  createData('Stat 3', 262, 16.0),
  createData('Stat 4', 305, 3.7),
  createData('Stat 5', 356, 16.0),
];

const theme = createTheme ({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function App() {
  return (
    <TableContainer sx={{bgcolor: 'background.paper', padding:3, maxWidth: 1000, ml: 30, mr:30, mt: 20, mb:20}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Universities</TableCell>
            <TableCell>Uni One</TableCell>
            <TableCell>Uni Two</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.Uni1}</TableCell>
              <TableCell>{row.Uni2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}