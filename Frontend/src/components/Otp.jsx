import React from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'

const Otp = () => {
  return (
    <div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50ch' },
          color: 'Grey',
          padding: '30px',
          border: 3,
          mx: 'auto',
          maxWidth: 600,
          margin: '75px 400px',
          alignContent: 'center',
          backgroundColor: 'ghostwhite',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Enter your Otp here!</h2>
        <hr />
        <TextField
          fullWidth
          id="otp"
          label=""
          variant="outlined"

        />
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Button variant="contained" color='success'>Submit</Button>
          <Button variant="contained" o color='success'>Cancel</Button>
        </Stack>
      </Box>
    </Grid>
  </div>
  )
}

export default Otp