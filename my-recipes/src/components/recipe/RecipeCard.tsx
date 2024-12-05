'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

import type Recipe from '@/lib/types/recipe';
import { useRouter } from 'next/navigation';

type RecipeCardProps = {
  data: Recipe;
};

export default function RecipeCard({ data }: RecipeCardProps) {
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
      {data.image ? (
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
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
          {data.name}
        </Typography>
        <div>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            <strong>{data.reviewCount}</strong> reviews
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Rating: <strong>{data.rating}</strong>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => router.push(`/recipes/${data.id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
