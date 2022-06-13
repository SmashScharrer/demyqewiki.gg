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
            :idChampion="item.id"
            :nameChampion="item.name"
            :pointsChampion="item.points"
            :levelChampion="item.level"
            :tokensEarnedChampion="item.tokensEarned"
            :isChestGrantedChampion="item.chestGranted"
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
      listChampions: [],
      listChampionsMasteries: [],
    };
  },
  methods: {
    async getChampions() {
      await axios
        .get(
          "http://ddragon.leagueoflegends.com/cdn/12.10.1/data/fr_FR/champion.json"
        )
        .then((response) => {
          Object.entries(response.data.data).forEach((value) => {
            this.listChampions.push({
              id: value[1].key,
              name: value[1].name,
            });
          });
        });
    },
    async getChampionsMasteries() {
      await axios
        .get(
          "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
            process.env.VUE_APP_SUMMONER +
            "?api_key=" +
            process.env.VUE_APP_API_KEY
        )
        .then((response) => {
          Object.entries(response.data).forEach((value) => {
            this.listChampionsMasteries.push({
              id: value[1].championId,
              name: "Test",
              asset: "",
              level: value[1].championLevel,
              points: value[1].championPoints,
              chestGranted: value[1].chestGranted,
              lastPlayTime: value[1].lastPlayTime,
              tokensEarned: value[1].tokensEarned,
            });
          });
        });
    },
  },
  mounted() {
    this.getChampions();
    this.getChampionsMasteries();
  },
};
</script>

<style scoped></style>
