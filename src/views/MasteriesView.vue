<template>
  <!-- NavBar -->
  <NavBar />
  <!-- Main -->
  <div class="masteries">
    <div class="container">
      <!-- Title -->
      <div class="row m-2">
        <div class="col-12">
          <h1 class="h1 text-center">Champions Mastery</h1>
        </div>
      </div>
      <!-- Subtitle -->
      <div class="row mb-3">
        <div class="col-12">
          <div class="group-subtitle-summoner">
            <h2 class="h2">{{ this.summoner.name }} - EUW</h2>
          </div>
        </div>
      </div>
      <!-- Search bar -->
      <div class="row d-flex justify-content-start mb-1">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Search a champion..."
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>
      <!-- Table -->
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover">
              <thead class="table-info">
                <tr>
                  <th scope="col" class="text-center">Champion</th>
                  <th scope="col" class="text-center">Level</th>
                  <th scope="col" class="text-center">Points</th>
                  <th scope="col" class="text-center">Last time</th>
                  <th scope="col" class="text-center">Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listChampionsMastery" v-bind:key="item.id">
                  <th scope="row" class="text-center">{{ item.id }}</th>
                  <td class="text-center">{{ item.level }}</td>
                  <td class="text-center">{{ item.points }}</td>
                  <td class="text-center">{{ item.lastPlay }}</td>
                  <td class="text-center">
                    <div v-if="item.level === 7">Mastered</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import NavBar from "@/components/NavBar";
import RequestsClass from "@/classes/RequestsClass";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);

export default {
  name: "MasteriesView",
  components: {
    NavBar,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  data() {
    return {
      version: "",
      summoner: [],
      listChampionsMastery: [],
    };
  },
  methods: {
    async getSummonerData(pSummonerName) {
      return await request.summoner.accountBySummonerName(pSummonerName);
    },
    async getSummonerMastery(pSummonerName) {
      let table = [];
      const result = await request.mastery.allMasteriesBySummonerName(
        pSummonerName
      );
      for (let index = 0; index < result.length; index++) {
        table.push({
          id: result[index].championId,
          level: result[index].championLevel,
          points: result[index].championPoints,
          lastPlay: new Date(result[index].lastPlayTime).toLocaleDateString(
            "en-GB"
          ),
        });
      }
      return table;
    },
  },
  async mounted() {
    this.summoner = await this.getSummonerData(this.route.params.summonerName);
    this.listChampionsMastery = await this.getSummonerMastery(
      this.route.params.summonerName
    );
  },
};
</script>

<style scoped></style>
