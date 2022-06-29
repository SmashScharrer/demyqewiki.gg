<template>
  <div class="overview">
    <h1 class="h1 text-center">
      The summoner is {{ $route.params.summonerName }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "OverviewView",
};
</script>

<style scoped></style>
