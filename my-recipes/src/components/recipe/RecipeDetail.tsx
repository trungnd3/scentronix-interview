import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import AccessTime from '@mui/icons-material/AccessTime';
import DinnerDining from '@mui/icons-material/DinnerDining';

import type Recipe from '@/lib/types/recipe';
import Chip from '../ui/Chip';

export default function RecipeDetail(recipe: Recipe) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ sm: 12, md: 6 }}>
          <Typography gutterBottom variant='h3' component='h1'>
            {recipe.name}
          </Typography>
          <Grid
            container
            sx={{ justifyContent: 'space-between', paddingRight: '3rem' }}
          >
            <Chip
              title='Prep'
              description={`${recipe.prepTimeMinutes} mins`}
              icon={{ comp: AccessTime, size: '3rem' }}
            />
            <Chip title='Cook' description={`${recipe.cookTimeMinutes} mins`} />
            <Chip
              title='Total'
              description={`${
                recipe.prepTimeMinutes + recipe.cookTimeMinutes
              } mins`}
            />
          </Grid>
          <Grid sx={{ marginTop: '1rem' }}>
            <Chip
              title='Yield'
              description={`${recipe.servings} servings`}
              icon={{
                comp: DinnerDining,
                size: '3rem',
              }}
            />
          </Grid>
        </Grid>
        <Grid size={{ sm: 10, md: 6 }} offset={{ sm: 1, md: 0 }}>
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={500}
            height={500}
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ xs: 12, sm: 5 }}>
          <Typography
            gutterBottom
            variant='h4'
            component='h2'
            sx={{ marginTop: '2rem' }}
          >
            Ingredients:
          </Typography>
          <ol>
            {recipe.ingredients.length &&
              recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>
                  <Typography key={ingredient}>{ingredient}</Typography>
                </li>
              ))}
          </ol>
        </Grid>
        <Grid size={{ xs: 12, sm: 7 }}>
          <Typography
            gutterBottom
            variant='h4'
            component='h2'
            sx={{ marginTop: '2rem' }}
          >
            Instructions:
          </Typography>
          <ol>
            {recipe.instructions.length &&
              recipe.instructions.map((instruction) => (
                <li key={instruction}>
                  <Typography key={instruction}>{instruction}</Typography>
                </li>
              ))}
          </ol>
        </Grid>
      </Grid>
    </>
  );
}
