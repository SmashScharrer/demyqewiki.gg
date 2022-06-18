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
          v-for="item in listDataCard"
          v-bind:key="item.key"
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
        >
          <CardChampionMastery
            :id-champion="item.key"
            :name-champion="item.name"
            :asset-champion="item.asset"
            :points-champion="item.points"
            :points-min-level-champion="item.pointsLastLevel"
            :points-max-level-champion="item.pointsNextLevel"
            :pourcent-level-champion="item.pourcentLevel"
            :level-champion="item.level"
            :tokens-earned-champion="item.tokensEarned"
            :is-chest-granted-champion="item.chestGranted"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsClass from "@/classes/RequestsClass";
import MathsClass from "@/classes/MathsClass";
import CardChampionMastery from "@/components/CardChampionMastery";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);
const maths = new MathsClass();

export default {
  name: "MasteriesView",
  components: {
    CardChampionMastery,
  },
  data() {
    return {
      version: "",
      listChampions: [],
      listChampionsMasteries: [],
      listDataCard: [],
    };
  },
  methods: {
    async getLatestVersion() {
      return await request.latestVersion();
    },
    async getAllChampions(pVersion) {
      let table = [];
      const result = await request.allChampions(pVersion);
      Object.entries(result).forEach((champion) => {
        table.push({
          id: champion[1].id,
          key: parseInt(champion[1].key),
          name: champion[1].name,
          asset: champion[1].image,
        });
      });
      return table;
    },
    async getChampionsMasteries(pSummoner) {
      let table = [];
      const result = await request.allChampionsMasteries(pSummoner);
      Object.entries(result).forEach((champion) => {
        table.push({
          key: parseInt(champion[1].championId),
          level: champion[1].championLevel,
          points: champion[1].championPoints,
          pointsSinceLastLevel: maths.calcMinPoints(
            champion[1].championPoints,
            champion[1].championPointsSinceNextLevel
          ),
          pointsUntilNextLevel: maths.calcMaxPoints(
            champion[1].championPoints,
            champion[1].championPointsUntilNextLevel
          ),
          pourcentLevel: maths.calcPourcentLevel(
            champion[1].championPoints,
            champion[1].championPointsUntilNextLevel
          ),
          lastPlayTime: champion[1].lastPlayTime,
          chestGranted: champion[1].chestGranted,
          tokensEarned: champion[1].tokensEarned,
        });
      });
      return table;
    },
    getCardChampionData(pTableChampions, pTableChampionsMasteries) {
      let table = [];
      pTableChampionsMasteries.forEach((championMasterie) => {
        pTableChampions.forEach((champion) => {
          if (champion.key === championMasterie.key) {
            table.push({
              key: champion.key,
              id: champion.id,
              name: champion.name,
              asset: `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/champion/${champion.id}.png`,
              level: championMasterie.level,
              points: championMasterie.points,
              pointsLastLevel: championMasterie.pointsSinceLastLevel,
              pointsNextLevel: championMasterie.pointsUntilNextLevel,
              pourcentLevel: championMasterie.pourcentLevel,
              lastPlay: championMasterie.lastPlayTime,
              chestGranted: championMasterie.chestGranted,
              tokensEarned: championMasterie.tokensEarned,
            });
          }
        });
      });
      return table;
    },
  },
  async mounted() {
    this.version = await this.getLatestVersion();
    this.listChampions = await this.getAllChampions(this.version);
    this.listChampionsMasteries = await this.getChampionsMasteries(
      process.env.VUE_APP_SUMMONER_ID
    );
    this.listDataCard = this.getCardChampionData(
      this.listChampions,
      this.listChampionsMasteries
    );
  },
};
</script>

<style scoped></style>
