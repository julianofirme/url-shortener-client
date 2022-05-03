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
    <Box sx={{
      width: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }} component="form" noValidate autoComplete="off">
      <FormControl sx={{ maxWidth: '700px', width: '100%' }}>
        <OutlinedInput sx={{
          backgroundColor: 'white',
          borderRadius: '20px'
        }} placeholder={placeholder} onChange={onChange} />
      </FormControl>
    </Box>
  );
}

export default Input;
