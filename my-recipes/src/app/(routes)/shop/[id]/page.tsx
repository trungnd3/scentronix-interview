import * as React from 'react';
import Container from '@mui/material/Container';

import ProductDetail from '@/components/product/ProductDetail';
import { getProductById } from '@/lib/api/products';

type ProductDetailPageProps = {
  params: Promise<{ id: number }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const id = (await params).id;
  const product = await getProductById(id);

  return (
    <Container maxWidth='md' sx={{ paddingTop: '4rem' }}>
      <ProductDetail {...product} />
    </Container>
  );
}
