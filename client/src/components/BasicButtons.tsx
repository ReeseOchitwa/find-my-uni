import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
        main: yellow[500]
    }}
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
  interface SavedUniversityData {
    uni_id: number;
    name: string;
    location: string;
    students: number;
    undergrads: number;
    postgrads: number;
  }
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  useEffect(() => {
    const fetchSavedData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/uni-stats-saved`);
        const data: SavedUniversityData[] = await response.json();
        const exists = data.some((item: SavedUniversityData) => item.uni_id -1 === props.id);
        setIsButtonDisabled(exists);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSavedData();
  }, [props.id]);
 
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={() => {setIsButtonDisabled(true);addToSaved();}} disabled={isButtonDisabled}>Add</Button>
    </ThemeProvider>
  );
}