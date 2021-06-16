import axiosInstance from "./axiosConfig";

function getRandomMealService(){
    return axiosInstance.get('/random.php');
}

function getMealDetailsByIdService(id){
    return axiosInstance.get(`/lookup.php?i=${id}`);
}

function getSearchResultsService(searchInput){
    return axiosInstance.get(`/search.php?s=${searchInput}`);
}

export {getRandomMealService, getMealDetailsByIdService, getSearchResultsService};