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
  id: string;
  disabled: boolean;
}

export default function BasicButtons(props: Props) {
    let [isDisabled, setIsDisabled] = React.useState(false)
    

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={() => setIsDisabled(true)} disabled={isDisabled}>Add</Button>
    </ThemeProvider>
  );
}


// const [buttonText, setButtonText] = useState<string>('Add');
    // const [color, setColor]= useState<string>('primary')
  
    // function handleClick(): void {
    //   if (buttonText === 'Add') {
    //     setButtonText('Delete');
    //     setColor('secondary');
    //   } else {
    //     setButtonText('Add');
    //     setColor('primary')
    //   }
    // }
