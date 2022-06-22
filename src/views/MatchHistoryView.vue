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
          v-for="item in listMatchData"
          v-bind:key="item.matchId"
          class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
        >
          <MatchDataComponent
            :game-type-id="item.matchQueueId"
            :game-start-timestamp="item.matchStartTimestamp"
            :game-end-timestamp="item.matchEndTimestamp"
            :game-match-version="item.matchGameVersion"
            :game-participants="item.matchParticipants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsClass from "@/classes/RequestsClass";
import MatchDataComponent from "@/components/MatchDataComponent";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);

export default {
  name: "HistoryView",
  components: {
    MatchDataComponent,
  },
  data() {
    return {
      listMatchsID: [],
      listMatchData: [],
    };
  },
  methods: {
    async getMachsID(pSummonerPUUID) {
      return await request.allMatchs(pSummonerPUUID);
    },
    async getMatchData(pTableMatchsID) {
      let table = [];
      for (const matchId of pTableMatchsID) {
        const result = await request.match(matchId);
        table.push({
          matchId: result.info.matchId,
          matchQueueId: result.info.queueId,
          matchStartTimestamp: result.info.gameStartTimestamp,
          matchEndTimestamp: result.info.gameEndTimestamp,
          matchGameVersion: result.info.gameVersion,
          matchParticipants: result.info.participants,
          info: result.info,
          metadata: result.metadata,
        });
      }
      return table;
    },
  },
  async mounted() {
    this.listMatchsID = await this.getMachsID(
      process.env.VUE_APP_SUMMONER_PUUID
    );
    this.listMatchData = await this.getMatchData(this.listMatchsID);
  },
};
</script>

<style scoped></style>
