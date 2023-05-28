import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteButtons from './DeleteButtons';

export default function SavedTable() {
  const [data, setData] = useState([]);
  
  const getData = async () => {
   try {
    const response = await fetch ("http://localhost:8000/uni-stats-saved");
    const jsonData = await response.json();
    setData(jsonData);
   } catch (error) {
    console.error(error);
   }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer sx={{padding:3, maxWidth: 1000}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Universities</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Students</TableCell>
            <TableCell>Undergraduates</TableCell>
            <TableCell>Postgraduates</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => {
            const universityId = data.uni_id;
            const modifiedUrl = `/save/${universityId}`;
            const urlWithoutSave = modifiedUrl.replace('/save/', '/');
            return(          
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={urlWithoutSave}> {data.name} </Link>
              </TableCell>
              <TableCell>{data.location} </TableCell>
              <TableCell>{data.students}</TableCell>
              <TableCell>{data.undergrads} </TableCell>
              <TableCell>{data.postgrads}</TableCell>
              <TableCell><DeleteButtons id={data.uni_id}/></TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>)
}
