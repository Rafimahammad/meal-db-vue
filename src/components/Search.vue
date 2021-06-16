<template>
  <div class="search">
    <h2>Search For Your Favourite Meal</h2>

    <div class="search-container">
      <form @submit.prevent>
        <input
          type="text"
          v-model="searchInput"
          placeholder="Search Your Meal here..."
          name="search"
          autocomplete="off"
        />
        <button id="searchBtn" @click="getSearchResults">Search</button>
      </form>
      <div v-if="!isLoading && !error">
        <div v-if="meals">
          <b-container>
            <b-row
              cols="1"
              cols-sm="2"
              cols-md="3"
              cols-lg="4"
              align-h="center"
            >
              <b-col id="my-col" v-for="meal in meals" :key="meal.idMeal">
                <meal-card :meal="meal" />
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div v-else style="margin-top:5px">
            <h4>No Meals Found, <sub>Please try with another meal</sub></h4>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MealCard from "./MealCard.vue";
export default {
  name: "Search",

  components: {
    MealCard,
  },
  data() {
    return {
      searchInput: null,
      isLoading: false,
      error: null,
      meals: [],
    };
  },

  computed: {
    ...mapState(["searchResults"]),
  },

  methods: {
    async getSearchResults() {
      if (this.searchInput.trim() !== "") {
        this.isLoading = true;
        try {
          await this.$store.dispatch("getSearchResults", this.searchInput);
        } catch (error) {
          this.error = error.message;
        }
        this.meals = this.searchResults;
        this.isLoading = false;
        this.searchInput = "";
      }
    },
  },
};
</script>

<style scoped>
.search {
  min-height: calc(100% - 125px);
  background-color: #e9ecef;
  /* text-align: center; */
}

#my-col {
  margin-bottom: 10px;
  margin-top: 10px;
}


input[type=text] {
  width: 40%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 5px 20px 5px 40px;
}

#searchBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 0px;
  padding: 6px 10px;
}
</style>