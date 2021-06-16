export default {
    setRandomMeal(state, payload){
        const [randomMeal] = payload;
        state.randomMeal = randomMeal;
    },
    setMealDetailsById(state, payload){
        const [mealDetails] = payload;
        state.mealDetails = mealDetails;
    },

    setSearchResults(state, payload){
        state.searchResults = payload;
    },
};