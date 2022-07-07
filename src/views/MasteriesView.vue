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
      <div class="row mb-2">
        <div class="col-12">
          <div class="group-subtitle-summoner">
            <p class="fs-3">
              <img
                :src="this.iconProfile"
                alt="Icon summoner profile"
                class="me-2"
              />{{ this.summoner.name }} - EUW
            </p>
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
              id="inputTextSearchChampionMastery"
              placeholder="Search a champion..."
              aria-describedby="searchChampionMastery"
              disabled
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
                <!-- Table : ROW Champion Mastery -->
                <tr v-for="item in listChampionsMastery" v-bind:key="item.id">
                  <!-- Table : COL Champion Name -->
                  <th scope="row" class="text-center">{{ item.name }}</th>
                  <!-- Table : COL Champion Level -->
                  <td class="text-center">{{ item.level }}</td>
                  <!-- Table : COL Champion Points -->
                  <td class="text-center">{{ item.points }}</td>
                  <!-- Table : COL Champion Last Time Played -->
                  <td class="text-center">{{ item.lastPlay }}</td>
                  <!-- Table : COL Tokens earned & Progress bar -->
                  <td class="text-center">
                    <div v-if="item.level === 7"><strong>Mastered</strong></div>
                    <div v-else-if="item.level === 6">
                      <div v-if="item.tokensEarned === 3">
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token"
                        />
                      </div>
                      <div v-if="item.tokensEarned === 2">
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                      </div>
                      <div v-else-if="item.tokensEarned === 1">
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                      </div>
                    </div>
                    <div v-else-if="item.level === 5">
                      <div v-if="item.tokensEarned === 1">
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                        <img
                          src="@/assets/tokenMastery.png"
                          alt="Token mastery"
                          class="token tokenNotEarned"
                        />
                      </div>
                    </div>
                    <div v-else-if="item.level === 4">
                      <div class="progress">
                        <div
                          class="progress-bar bg-info progress-bar-striped"
                          role="progressbar"
                          :style="{ width: item.pourcentLevel + '%' }"
                          aria-valuenow="7000"
                          aria-valuemin="6600"
                          aria-valuemax="9000"
                        ></div>
                      </div>
                    </div>
                    <div v-else-if="item.level === 3">
                      <div class="progress">
                        <div
                          class="progress-bar bg-info progress-bar-striped"
                          role="progressbar"
                          :style="{ width: item.pourcentLevel + '%' }"
                          aria-valuenow="5000"
                          aria-valuemin="4200"
                          aria-valuemax="6600"
                        ></div>
                      </div>
                    </div>
                    <div v-else-if="item.level === 2">
                      <div class="progress">
                        <div
                          class="progress-bar bg-info progress-bar-striped"
                          role="progressbar"
                          :style="{ width: item.pourcentLevel + '%' }"
                          aria-valuenow="2000"
                          aria-valuemin="1800"
                          aria-valuemax="4200"
                        ></div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="progress">
                        <div
                          class="progress-bar bg-info progress-bar-striped"
                          role="progressbar"
                          :style="{ width: item.pourcentLevel + '%' }"
                          aria-valuenow="1000"
                          aria-valuemin="0"
                          aria-valuemax="1800"
                        ></div>
                      </div>
                    </div>
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
import MathsClass from "@/classes/MathsClass";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);

export default {
  name: "MasteriesView",
  components: {
    NavBar,
  },
  setup() {
    const maths = new MathsClass();
    const route = useRoute();
    const summonerName = route.params.summonerName;
    return {
      maths,
      route,
      summonerName,
    };
  },
  data() {
    return {
      version: "",
      iconProfile: "",
      summoner: [],
      listChampions: [],
      listChampionsMastery: [],
    };
  },
  methods: {
    async getSummonerData(pSummonerName) {
      return await request.summoner.accountBySummonerName(pSummonerName);
    },
    async getSummonerIcon(pSummonerName) {
      return await request.icon.iconProfileBySummonerName(pSummonerName);
    },
    async getChampionsData() {
      return await request.champion.all();
    },
    async getSummonerMastery(pSummonerName) {
      let table = [];
      const result = await request.mastery.all(pSummonerName);
      for (let index = 0; index < result.length; index++) {
        Object.entries(this.listChampions).forEach((champion) => {
          if (
            parseInt(champion[1].key) === parseInt(result[index].championId)
          ) {
            table.push({
              id: result[index].championId,
              name: champion[1].name,
              level: result[index].championLevel,
              points: result[index].championPoints,
              lastPlay: new Date(result[index].lastPlayTime).toLocaleDateString(
                "en-GB"
              ),
              tokensEarned: result[index].tokensEarned,
              pourcentLevel: this.maths.level.pourcentLevel(
                result[index].championPoints,
                result[index].championPointsUntilNextLevel
              ),
            });
          }
        });
      }
      return table;
    },
  },
  async mounted() {
    this.summoner = await this.getSummonerData(this.summonerName);
    this.iconProfile = await this.getSummonerIcon(this.summonerName);
    this.listChampions = await this.getChampionsData();
    this.listChampionsMastery = await this.getSummonerMastery(
      this.summonerName
    );
  },
};
</script>

<style scoped>
.group-subtitle-summoner img {
  width: 2.5em;
  height: 2.5em;
}
.token {
  height: 26px;
}
.tokenNotEarned {
  filter: brightness(1%) opacity(15%);
}
</style>
