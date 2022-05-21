import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Snack() {
  const [state, setState] = React.useState({
    oranges: true,    bananas: false,
    apples: false,
    watermelon: false,
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

  const { oranges, bananas, apples, watermelon, water, gatorade, lemonade, juice } = state;
  const error = [oranges, bananas, apples, watermelon, water, gatorade, lemonade, juice].filter((v) => v).length !== 1;

  return (
    <div className="snack-selection">
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Pick One Snack</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={oranges} onChange={handleChange} name="oranges" />
              }
              label="Oranges"
            />
            <FormControlLabel
              control={
                <Checkbox checked={bananas} onChange={handleChange} name="bananas" />
              }
              label="Bananas"
            />
            <FormControlLabel
              control={
                <Checkbox checked={apples} onChange={handleChange} name="apples" />
              }
              label="Apples"
            />
            <FormControlLabel
              control={
                <Checkbox checked={watermelon} onChange={handleChange} name="watermelon" />
              }
              label="Watermelon"
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
    </div>
  );
}