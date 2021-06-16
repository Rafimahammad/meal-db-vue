<template>
  <div class="meal-card">
    <!-- <h3>Meal Card Component</h3> -->

    <b-card
      :title="meal.strMeal"
      :img-src="meal.strMealThumb"
      img-alt="Meal_Image"
      img-top
      tag="article"
      style="max-width: 18rem"
      @click="getMealDetails(meal.idMeal)"
      class="image-cursor"
    >
      <b-card-text>
        <p>
          <b>Category:</b>{{ meal.strCategory }}<br />
          <b>Meal Style:</b>{{ meal.strArea }}
        </p>
      </b-card-text>

      <b-button variant="primary" @click="getMealDetails(meal.idMeal)"
        >Get Meal Details</b-button
      >
    </b-card>
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

.image-cursor{
    cursor: pointer;
}
</style>