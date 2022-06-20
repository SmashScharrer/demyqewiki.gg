<template>
  <div class="history">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="h1 text-center">Match History</h1>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
          style="border: solid red 1px"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rank</h5>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8"
          style="border: solid blue 1px"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Match history</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsClass from "@/classes/RequestsClass";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);

export default {
  name: "HistoryView",
  data() {
    return {
      summonerInfos: [],
      listMatchsID: [],
      listMatchData: [],
    };
  },
  methods: {
    async getSummoner() {
      let table = [];
      const result = await request.summonerAccount();
      table.push({
        accountId: result.accountId,
        puuid: result.puuid,
        name: result.name,
        iconId: parseInt(result.profileIconId),
        level: result.summonerLevel,
      });
      return table;
    },
    async getMachsID(pSummonerPUUID) {
      return await request.allMatchs(pSummonerPUUID);
    },
    async getMatchData(pTableMatchsID) {
      let table = [];
      for (const value of pTableMatchsID) {
        console.log(value);
        const result = await request.match(value);
        table.push({
          info: result.info,
          metadata: result.metadata,
        });
      }
      return table;
    },
  },
  async mounted() {
    this.summonerInfos = await this.getSummoner();
    this.listMatchsID = await this.getMachsID(this.summonerInfos[0].puuid);
    this.listMatchData = await this.getMatchData(this.listMatchsID);
    // for (const value of this.listMatchsID) {
    //   console.log(await this.getMatchData(value));
    // }
  },
};
</script>

<style scoped></style>
