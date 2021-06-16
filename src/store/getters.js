export default{
    getIngredients(state){
        const ingredientsList = [];
        const measuresList = [];
        const ingredientsWithMeasuresList = [];

        const mealDetailsArr = Object.entries(state.mealDetails);
        mealDetailsArr.forEach((detail) => {
            const [key, value] = detail;
            if(key.includes('strIngredient') && value !== null && value.trim() !== ''){
                ingredientsList.push(value);
            }
            else if(key.includes('strMeasure') && value !== null && value.trim() !== ''){
                measuresList.push(value);
            }
        });

        ingredientsList.forEach((value, index)=>{
            ingredientsWithMeasuresList.push({
                id: index + 1,
                ingredient: value,
                measure: measuresList[index],
            });
        })

        return ingredientsWithMeasuresList;

        
    },
};