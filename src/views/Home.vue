<template>
  <div class="home">
    <div class="home-content" v-if="!isLoading && !error">
      <meal-card v-bind:meal="randomMeal" />
    </div>

    <div class="home-content" v-else-if="!isLoading && error">
      <error-page :error="error" />
    </div>

    <div class="home-content" v-else>
      <div>
        <b-spinner variant="secondary" label="Spinning"></b-spinner><br>
        <b>Please Wait</b>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MealCard from "@/components/MealCard.vue";
import { mapState } from "vuex";
import ErrorPage from "@/components/ErrorPage.vue";

export default {
  name: "Home",
  components: {
    MealCard,
    ErrorPage,
  },

  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  computed: {
    ...mapState(["randomMeal"]),
  },
  created() {
    this.getRandomMeal();
  },

  methods: {
    async getRandomMeal() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("getRandomMeal");
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
.home {
  min-height: calc(100% - 125px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 60.67px;
  padding-bottom: 24px; */
  background-color: #b8daff;
}
</style>
