import * as React from 'react';
import Container from '@mui/material/Container';

import RecipeDetail from '@/components/recipe/RecipeDetail';
import { getRecipeById } from '@/lib/api/recipes';

type RecipePageProps = {
  params: Promise<{ id: number }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const id = (await params).id;
  const recipe = await getRecipeById(id);

  return (
    <Container maxWidth='md' sx={{ paddingTop: '4rem' }}>
      <RecipeDetail {...recipe} />
    </Container>
  );
}
