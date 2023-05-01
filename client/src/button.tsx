import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
        main: yellow[500]
    },
    secondary: {
      main: red[500]
    },
  },
});

export default function BasicButtons(props: { id: string,}) {
    const [buttonText, setButtonText] = useState<string>('Add');
    const [color, setColor]= useState<string>('primary')
  
    function handleClick(): void {
      if (buttonText === 'Add') {
        setButtonText('Delete');
        setColor('secondary');
      } else {
        setButtonText('Add');
        setColor('primary')
      }
    }

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleClick} id={props.id} color={color as 'primary' | 'secondary'} variant='contained'>{buttonText}</Button>
    </ThemeProvider>
  );
}

