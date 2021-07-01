import getters from '@/store/getters';

describe('store getters', () => {
  const state = {
    mealDetails: {
      idMeal: '52856',
      strMeal: 'Choc Chip Pecan Pie',
      strCategory: 'Dessert',
      strArea: 'American',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
      strYoutube: 'https://www.youtube.com/watch?v=fDpoT0jvg4Y',
      strIngredient1: 'Plain Flour',
      strIngredient2: 'Butter',
      strIngredient3: '',
      strIngredient4: '',
      strMeasure1: '300g',
      strMeasure2: '75g',
      strMeasure3: '',
      strMeasure4: '',
    },
  };

  it('should return ingredient and measure list', () => {
    const ingredientsMeasureList = getters.getIngredients(state);
    expect(ingredientsMeasureList).toEqual([
      { id: 1, ingredient: 'Plain Flour', measure: '300g' },
      { id: 2, ingredient: 'Butter', measure: '75g' },
    ]);
  });

  it('should return modified youtube url', () => {
    const youtubeUrl = getters.getYoutubeUrl(state);
    expect(youtubeUrl).toBe('https://www.youtube.com/embed/fDpoT0jvg4Y');
  });
});
