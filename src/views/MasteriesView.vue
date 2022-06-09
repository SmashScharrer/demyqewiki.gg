<template>
  <div class="masteries">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="h1 text-center">Champions Masteries</h1>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in listChampionsMasteries"
          v-bind:key="item.championId"
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
        >
          <CardChampionMastery
            :id="item.championId"
            :points="item.championPoints"
            :level="item.championLevel"
            :tokensEarned="item.tokensEarned"
            :isChestGranted="item.chestGranted"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CardChampionMastery from "@/components/CardChampionMastery";

export default {
  name: "MasteriesView",
  components: {
    CardChampionMastery,
  },
  data() {
    return {
      summonerId: "ayfPQxxzVKaOEqivKe8B9c7UqeLvdGfBSysYTdQ8VBgxCWKn",
      apiKey: "RGAPI-6082214f-5a9e-4dc9-a596-4f9fdef2eec5",
      listChampions: [],
      listChampionsMasteries: {},
    };
  },
  methods: {
    async getChampionsMasteries() {
      await axios({
        method: "get",
        url:
          "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
          this.summonerId +
          "?api_key=" +
          this.apiKey,
      })
        .then((response) => {
          this.listChampionsMasteries = response.data;
        })
        .catch((error) => {
          console.log("Error : " + error);
        });
    },
    getChampionAsset() {},
  },
  mounted() {
    this.getChampionsMasteries();
  },
};
</script>

<style scoped></style>
