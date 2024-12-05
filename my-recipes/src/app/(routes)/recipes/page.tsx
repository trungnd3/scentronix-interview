import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

import RecipeCard from '@/components/recipe/RecipeCard';
import { getAllRecipes } from '@/lib/api/recipes';

export default async function RecipesPage() {
  const recipes = await getAllRecipes();

  return (
    <Container maxWidth='md' sx={{ paddingTop: '2rem' }}>
      {recipes.length && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {recipes.map((recipe) => (
            <Grid key={recipe.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <RecipeCard data={recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
