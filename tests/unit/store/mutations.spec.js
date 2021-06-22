import mutations from '@/store/mutations';

describe('store mutations', () => {
  it('add random meal to state', () => {
    const state = {
      randomMeal: {},
    };
    const randomMeal = [{
      strMeal: 'Choc Chip Pecan Pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
      strCategory: 'Dessert',
      strArea: 'American',
      idMeal: '52856',
    }];
    mutations.setRandomMeal(state, randomMeal);
    expect(state).toEqual({
      randomMeal: {
        strMeal: 'Choc Chip Pecan Pie',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
        strCategory: 'Dessert',
        strArea: 'American',
        idMeal: '52856',
      },
    });
  });

  it('add meal details to state', () => {
    const state = {
      mealDetails: {},
    };
    const mealDetails = [{
      strMeal: 'Choc Chip Pecan Pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
      strCategory: 'Dessert',
      strArea: 'American',
      idMeal: '52856',
    }];
    mutations.setMealDetailsById(state, mealDetails);
    expect(state).toEqual({
      mealDetails: {
        strMeal: 'Choc Chip Pecan Pie',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
        strCategory: 'Dessert',
        strArea: 'American',
        idMeal: '52856',
      },
    });
  });

  it('add search result to state', () => {
    const state = {
      searchResults: [],
    };
    const searchResults = [{ strMeal: 'Choc Chip Pecan Pie' }, { strMeal: 'Blackberry Fool' }];
    mutations.setSearchResults(state, searchResults);
    expect(state).toEqual({
      searchResults: [{ strMeal: 'Choc Chip Pecan Pie' }, { strMeal: 'Blackberry Fool' }],
    });
  });
});
