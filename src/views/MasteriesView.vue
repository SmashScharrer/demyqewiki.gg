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
            :assetChampion="item.asset"
            :pointsChampion="item.points"
            :pointsMinLevelChampion="item.pointsMinLevel"
            :pointsMaxLevelChampion="item.pointsMaxLevel"
            :pourcentLevelChampion="item.pourcentLevel"
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
          "https://ddragon.leagueoflegends.com/cdn/12.10.1/data/fr_FR/champion.json",
          {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          }
        )
        .then((response) => {
          Object.entries(response.data.data).forEach((value) => {
            this.listChampions.push({
              id: value[1].key,
              name: value[1].name,
              asset: value[1].image.full,
            });
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log("Error request hedars : " + error.response.headers);
          } else if (error.request) {
            console.log("Error request : " + error.request);
          } else {
            console.log("Error : " + error.message);
          }
        });
    },
    async getChampionsMasteries() {
      await axios
        .get(
          "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
            process.env.VUE_APP_SUMMONER_ID +
            "?api_key=" +
            process.env.VUE_APP_API_KEY,
          {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          }
        )
        .then((response) => {
          let nameChampion = "";
          let assetChampion = "";

          Object.entries(response.data).forEach((value) => {
            this.listChampions.forEach((item) => {
              if (parseInt(item.id) === parseInt(value[1].championId)) {
                nameChampion = item.name;
                assetChampion = item.asset;
              }
            });

            this.listChampionsMasteries.push({
              id: value[1].championId,
              name: nameChampion,
              asset:
                "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/" +
                assetChampion,
              level: value[1].championLevel,
              points: value[1].championPoints,
              pointsMinLevel:
                parseInt(value[1].championPoints, 10) -
                parseInt(value[1].championPointsSinceNextLevel, 10),
              pointsMaxLevel:
                parseInt(value[1].championPoints, 10) +
                parseInt(value[1].championPointsUntilNextLevel, 10),
              pourcentLevel:
                (parseInt(value[1].championPoints) * 100) /
                (parseInt(value[1].championPoints, 10) +
                  parseInt(value[1].championPointsUntilNextLevel, 10)),
              chestGranted: value[1].chestGranted,
              lastPlayTime: value[1].lastPlayTime,
              tokensEarned: value[1].tokensEarned,
            });
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log("Error request hedars : " + error.response.headers);
          } else if (error.request) {
            console.log("Error request : " + error.request);
          } else {
            console.log("Error : " + error.message);
          }
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
