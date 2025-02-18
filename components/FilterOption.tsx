import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

interface Option {
  label: string;
  value: string;
}

export default function FilterOptions() {
  const timePeriods: Option[] = [
    { label: 'Today', value: 'today' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: '3 Month', value: '3month' },
  ];

  const similarities: Option[] = [
    { label: '50%', value: '50' },
    { label: '70%', value: '70' },
    { label: '90%', value: '90' },
    { label: 'Directly', value: 'directly' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      {/* Time period buttons */}
      <Box sx={{ display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', backgroundColor:'#F4F4F5' }}>

        {/* Group "Today" and "Week" in one line */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'nowrap' }}>
          {timePeriods.slice(0, 2).map((period: Option) => (
            <Button
              key={period.value}
              sx={{ textTransform: 'none', minWidth: '80px',color:'black' }} 
            >
              {period.label}
            </Button>
          ))}
        </Box>

        {/* Group "Month" and "3 Month" in another line */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'nowrap' }}>
          {timePeriods.slice(2).map((period: Option) => (
            <Button
              key={period.value}
              sx={{ textTransform: 'none', minWidth: '80px',color:'black' }}
            >
              {period.label}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Similarity Toggle Buttons */}
      <Box >
        <Typography>Similarity</Typography>
        <ToggleButtonGroup
          aria-label="Similarity"
          sx={{backgroundColor:'#F4F4F5' }}
        >
          {similarities.map((sim: Option) => (
            <ToggleButton key={sim.value} value={sim.value}  sx={{
                textTransform: 'none',
                borderRadius: '20px',  // Make the button rounded
                padding: '8px 16px',   // Adjust padding for better button size
                '&.Mui-selected': {
                  backgroundColor: 'blue', // Change the background color when selected
                  color: 'white',  // Change text color when selected
                },
                '&:hover': {
                  backgroundColor: 'lightgray', // Hover effect for the button
                },
              }}>
              {sim.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
