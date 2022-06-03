<template>
  <div class="card-champion-mastery">
    <div class="card mb-3 mx-auto" style="width: 12rem">
      <img
        :src="this.asset"
        class="card-img-top"
        alt="League of Legends champions"
      />
      <div class="card-body">
        <h5 class="card-title text-center">{{ this.id }}</h5>
        <p class="card-text text-center fst-italic">
          {{ this.points }}
        </p>
      </div>
      <div class="card-footer text-center">Masteries {{ this.level }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardChampionMastery",
  props: {
    id: Number,
    points: Number,
    level: Number,
    asset: String,
  },
};
</script>

<style scoped></style>
