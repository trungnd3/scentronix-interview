import * as React from 'react';
import NextLink from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Container maxWidth='md'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' component='h1' sx={{ mb: 2 }}>
          Shopify and Recipes collection
        </Typography>
        <Grid container sx={{ gap: '2rem' }}>
          <Button variant='contained' component={NextLink} href='/shop'>
            Start shopping
          </Button>
          <Button variant='outlined' component={NextLink} href='/recipes'>
            Review recipes
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
