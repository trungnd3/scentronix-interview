import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

import { getAllProducts } from '@/lib/api/products';
import ProductCard from '@/components/product/ProductCard';

export default async function Products() {
  const products = await getAllProducts();
  return (
    <Container maxWidth='md' sx={{ paddingTop: '2rem' }}>
      {products.length && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <ProductCard data={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
