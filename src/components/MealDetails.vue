<template>
  <div class="meal-details">
    <div v-if="!isLoading && !error">
      <div>
        <table>
          <tr>
            <td style="width: 35%">
              <h5>
                <b>{{ mealDetails.strMeal }}</b>
              </h5>
            </td>
            <td style="width: 60%">
              <h4>List Of Ingredients</h4>
            </td>
          </tr>
          <tr>
            <td style="width: 35%">
              <b-img
                :src="mealDetails.strMealThumb"
                alt="meal-img"
                fluid
              ></b-img>
            </td>
            <div style="width=60%">
              <table style="width: 95%" border="2px">
                <tr>
                  <th>Ingredients</th>
                  <th>Measures</th>
                </tr>
                <tr v-for="ingredient in getIngredients" :key="ingredient.id">
                  <td>{{ ingredient.ingredient }}</td>
                  <td>{{ ingredient.measure }}</td>
                </tr>
              </table>
            </div>
          </tr>
        </table>
      </div>

      <br />
      <h3>Instructions</h3>
      <p class="instructions">{{ mealDetails.strInstructions }}</p>

      <!-- <video controls>
       

        <b-embed type="video">
          <source :src="mealDetails.strYoutube" />
        </b-embed>
      </video> -->
       <!-- <source :src="mealDetails.strYoutube" /> -->
    </div>

    <div v-else-if="!isLoading && error">
      <error-page :error="error" />
    </div>

    <div v-else>
      <div>
        <b-spinner variant="secondary" label="Spinning"></b-spinner><br>
        <b>Please Wait</b>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ErrorPage from './ErrorPage.vue';
export default {
 
  name: "MealDetails",

  components: {
    ErrorPage
  },

  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  computed: {
    ...mapState(["mealDetails"]),
    ...mapGetters(["getIngredients"]),
  },

  created() {
    this.getMealDetailsById(this.$route.params.id);
  },

  methods: {
    async getMealDetailsById(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("getMealDetailsById", id);
      } catch (error) {
        this.error = error.message;
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.meal-details {
  min-height: calc(100% - 125px);
  background-color: #e9ecef;
  text-align: center;
}

.img-fluid {
  max-width: 80%;
  height: auto;
}

th {
  width: 50%;
  color: white;
  background-color: rgb(221, 25, 25);
}
.instructions {
  margin-bottom: 0px;
  padding-bottom: 1rem;
}
</style>