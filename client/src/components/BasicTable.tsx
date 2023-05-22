import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicButtons from './BasicButtons';

export default function BasicTable() {

  interface Data {
    _id : number;
    universityName: string;
    geographicalData: {
      location: string;
    }
    populationData: {
      Students: number,
      Undergraduates: number,
      Postgraduates: number;
    }
  }
  
  const [data, setData] = useState<Data[]>([]);
  
  const getData = async () => {
   try {
    const response = await fetch ("http://localhost:8000/uni-stats");
    const jsonData = await response.json();
    setData(jsonData);
   } catch (error) {
    console.error(error);
   }
  }
  
  useEffect(() => {
    getData();
  }, [])
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
          {data.map((data, index) => (
            <TableRow
              key={data.universityName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={JSON.stringify(data._id)}>{data.universityName}</Link>
              </TableCell>
              <TableCell>{data.geographicalData.location}</TableCell>
              <TableCell>{data.populationData.Students}</TableCell>
              <TableCell>{data.populationData.Undergraduates} </TableCell>
              <TableCell>{data.populationData.Postgraduates}</TableCell>
              <TableCell><BasicButtons disabled id={index}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}