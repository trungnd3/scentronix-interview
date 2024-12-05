'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import type Product from '@/lib/types/product';

type ProductCardProps = {
  data: Product;
};

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {data.images.length ? (
        <CardMedia
          sx={{ height: 140 }}
          image={data.images[0]}
          title='green iguana'
        />
      ) : (
        <Skeleton variant='rectangular' height={140} />
      )}
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography gutterBottom variant='h5' component='div'>
          {data.title}
        </Typography>
        <div>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            <strong>{data.reviews.length}</strong> reviews
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Rating: <strong>{data.rating}</strong>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => router.push(`/shop/${data.id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
