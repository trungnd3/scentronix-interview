import type Recipe from '@/lib/types/recipe';

export async function getAllRecipes() {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data.recipes as Recipe[];
}

export async function getRecipeById(id: number) {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  return data as Recipe;
}
