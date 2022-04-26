import { Button, Stack } from '@mui/material';
import React from 'react';

interface SearchButtonProps {
  value: string;
  onClick: () => void;
}

function SearchButton({ value, onClick }: SearchButtonProps) {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button sx={{
          height: '56px',
          background: '#F37D63',
          borderRadius: '20px',
          margin: '12px',
          color: '#000',
          fontWeight: 'bold'
        }} variant="contained">{value}</Button>
      </Stack>
    </>
  );
}

export default SearchButton;
