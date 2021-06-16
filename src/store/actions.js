import {getRandomMealService, getMealDetailsByIdService, getSearchResultsService } from '@/service/service.js';

export default {
    async getRandomMeal(context){
        try{
            const response = await getRandomMealService();
            context.commit('setRandomMeal', response.data.meals);
        } catch (error){
            console.log(error.message);
            throw error;
        }
    },

    async getMealDetailsById(context, id){
        try{
            const response = await getMealDetailsByIdService(id);
            context.commit('setMealDetailsById', response.data.meals);
        } catch(error){
            console.log(error.message);
            throw error;
        }
    },

    async getSearchResults(context, searchInput){
        try{
            const response = await getSearchResultsService(searchInput);
            context.commit('setSearchResults', response.data.meals);
        }catch(error){
            console.log(error.message);
            throw error;
        }
    },
};
