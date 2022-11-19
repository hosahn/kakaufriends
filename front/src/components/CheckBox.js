import * as React from "react";
import { Box, Checkbox, FormControlLabel, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Slider from '@mui/material/Slider';
import { useState } from "react";
import * as style from "../styles/CommonStyle";
import StyledEngine from "@mui/styled-engine";


//memberInfo : img, title, author, github, email
export default function CheckBox({ forbiden }) {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (3 < 2){
    return (
      <>
        <FormControlLabel control={<Checkbox />} label="some category" /> 
      </>
    );
  }
  else{
    return (
      <>
        <Box sx={{ width: 300 }}> 
        <FormControlLabel control={<Checkbox />} label="some category" /> 
        <Slider step={10} value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
         aria-label="Always visible" defaultValue={30} />
        </Box>
      </>
    );
  }
  
}