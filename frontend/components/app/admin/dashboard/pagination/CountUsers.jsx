import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CountUsers = () => {
  return (
    <div className='flex items-center justify-center mt-3'>
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </div>
  )
}

export default CountUsers