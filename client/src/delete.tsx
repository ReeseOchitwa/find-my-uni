import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
        main: red[500]
}}});

export default function DeleteButtons(props: { id: string,}) {
    const [buttonText, setButtonText] = useState<string>('Delete');
  
    function handleClick(): void {
        
    }

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleClick} id={props.id} color='primary' variant='contained'>{buttonText}</Button>
    </ThemeProvider>
  );
}