import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

interface InputProps {
  placeholder: string;
  onChange: (event: any) => void
}

function Input({ placeholder, onChange }: InputProps) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '60ch' }}>
        <OutlinedInput sx={{
          backgroundColor: 'white',
          borderRadius: '20px'
        }} placeholder={placeholder} onChange={onChange} />
      </FormControl>
    </Box>
  );
}

export default Input;
