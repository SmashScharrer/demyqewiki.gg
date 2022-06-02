<template>
  <div class="card-champion-mastery">
    <div class="card mb-3 mx-auto" style="width: 12rem">
      <img
        :src="this.asset"
        class="card-img-top"
        alt="League of Legends champions"
      />
      <div class="card-body">
        <h5 class="card-title text-center">{{ this.name }}</h5>
        <p class="card-text text-center fst-italic">
          {{ this.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardChampionMastery",
  props: {
    asset: String,
    name: String,
    title: String,
  },
};
</script>

<style scoped></style>
