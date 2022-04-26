import { Button, Stack } from '@mui/material';
import React from 'react';

interface CopyButtonProps {
  value: string;
  onClick: () => void;
}

function CopyButton({ value, onClick }: CopyButtonProps) {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button
        onClick={onClick} 
        sx={{
          height: '56px',
          borderRadius: '20px',
          margin: '12px',
          color: '#F37D63',
          fontWeight: 'bold',
        }} variant="text">{value}</Button>
      </Stack>
    </>
  );
}

export default CopyButton;
