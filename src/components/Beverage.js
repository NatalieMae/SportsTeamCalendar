import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Beverage() {
  const [state, setState] = React.useState({
    water: true,
    gatorade: false,
    lemonade: false,
    juice: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { water, gatorade, lemonade, juice } = state;
  const error = [water, gatorade, lemonade, juice].filter((v) => v).length !== 1;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Pick One Beverage</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={water} onChange={handleChange} name="water" />
            }
            label="Water"
          />
          <FormControlLabel
            control={
              <Checkbox checked={gatorade} onChange={handleChange} name="gatorade" />
            }
            label="Gatorade"
          />
          <FormControlLabel
            control={
              <Checkbox checked={lemonade} onChange={handleChange} name="lemonade" />
            }
            label="Lemonade"
          />
          <FormControlLabel
            control={
              <Checkbox checked={juice} onChange={handleChange} name="juice" />
            }
            label="Juice"
          />
        </FormGroup>
        
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      />
    </Box>
    
  );
  
}