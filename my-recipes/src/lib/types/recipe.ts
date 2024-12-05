type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string; //'Medium',
  cuisine: string; //'Asian',
  caloriesPerServing: number;
  tags: string[]; //[ 'Vegetarian', 'Stir-fry', 'Asian' ],
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[]; //[ 'Lunch' ]
};

export default Recipe;
