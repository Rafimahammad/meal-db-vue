<template>
  <div class="meal-card">
    <!-- <h3>Meal Card Component</h3> -->

    <div v-if="meal">
      <b-card
      :title="meal.strMeal"
      :img-src="meal.strMealThumb"
      img-alt="Meal_Image"
      img-top
      tag="article"
      style="max-width: 18rem"
     
    >
    
      <b-card-text>
        <p>
          <b>Category:</b>{{ meal.strCategory }}<br />
          <b>Meal Style:</b>{{ meal.strArea }}
        </p>
      </b-card-text>

      <b-button variant="primary" id="getMealDetailsBtn" @click="getMealDetails(meal.idMeal)"
        >Get Meal Details</b-button
      >
    </b-card>
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
export default {
  name: "MealCard",
  props: ["meal"],

  methods: {
    getMealDetails(id) {
      this.$router.push({ name: "MealDetails", params: { id } });
    },
  },
};
</script>

<style>
.meal-card {
  height: 100%;
}
.card {
  margin: auto;
  height: 100%;
}
.card-body {
  padding: 0.25rem;
}

/* .image-cursor{
    cursor: pointer;
} */
</style>