import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
        main: red[500]
}}});

export default function DeleteButtons(props) {
    const deleteData = async () => {
      const id = props.id;
      const URI = `http://localhost:8000/uni-stats-saved/${id}`;
      const request = await fetch(URI, {
        "method":"DELETE",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": ""
      })
      window.location.reload(false);
    }

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={deleteData} color='primary' variant='contained'>DELETE</Button>
    </ThemeProvider>
  );
}