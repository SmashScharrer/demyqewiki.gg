<template>
  <div class="history">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="h1 text-center">Match History</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <CardMatchData />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsClass from "@/classes/RequestsClass";
import CardMatchData from "@/components/CardMatchData";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);

export default {
  name: "HistoryView",
  components: {
    CardMatchData,
  },
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
  },
};
</script>

<style scoped></style>
