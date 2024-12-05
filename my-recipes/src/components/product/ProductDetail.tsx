import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import Skeleton from '@mui/material/Skeleton';

import type Product from '@/lib/types/product';
import Chip from '../ui/Chip';

export default function ProductDetail(product: Product) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ sm: 12, md: 6 }}>
          {product ? (
            <>
              <Typography gutterBottom variant='h3' component='h1'>
                {product.title}
              </Typography>
              <Typography
                gutterBottom
                variant='body1'
                component='p'
                sx={{ marginTop: '2rem' }}
              >
                {product.description}
              </Typography>
              <Typography
                gutterBottom
                variant='h6'
                component='p'
                sx={{ marginTop: '1rem' }}
              >
                Price: ${product.price}
              </Typography>
            </>
          ) : (
            <>
              <Skeleton variant='text' sx={{ fontSize: '3rem' }} />
              <Skeleton
                variant='text'
                sx={{ fontSize: '1rem', marginTop: '2rem' }}
              />
              <Skeleton
                variant='text'
                sx={{ fontSize: '1.25rem', marginTop: '1rem' }}
              />
            </>
          )}
        </Grid>
        <Grid size={{ sm: 10, md: 6 }} offset={{ sm: 1, md: 0 }}>
          {product ? (
            <Image
              src={product.images[0]}
              alt={product.title}
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <Skeleton variant='rectangular' />
          )}
        </Grid>
      </Grid>
    </>
  );
}
