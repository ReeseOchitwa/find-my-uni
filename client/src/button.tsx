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
interface Props {
  id: number;
  disabled: boolean;
}

export default function BasicButtons(props: Props) {
  const addToSaved = async () => {
    const id = props.id + 1;
    const response = await fetch(`http://localhost:8000/uni-stats-saved/${id}`, {
      "method":"POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": ""
    });
  }

  let [isDisabled, setIsDisabled] = React.useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={() => {setIsDisabled(true);addToSaved();}} disabled={isDisabled}>Add</Button>
    </ThemeProvider>
  );
}