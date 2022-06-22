<template>
  <div class="match-data">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-xl-10">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-start">
                <div class="group-title mb-2">
                  <strong>{{ this.matchType }}</strong> ∙
                  {{ this.matchDuration }} ∙ P{{ this.matchGameVersion }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="group-one d-flex">
                  <div class="group-champion me-2">
                    <div class="champion">
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/champion/' +
                          this.matchChampionName +
                          '.png'
                        "
                        :alt="this.matchChampionName"
                        class="img-champion"
                      />
                    </div>
                  </div>
                  <div class="group-summoners-spells me-2">
                    <div class="summoner-spell">
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/spell/' +
                          this.matchFirstSummoner +
                          '.png'
                        "
                        :alt="this.matchFirstSummoner"
                        class="img-summoner-spell"
                      />
                    </div>
                    <div class="summoner-spell">
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/spell/' +
                          this.matchSecondSummoner +
                          '.png'
                        "
                        :alt="this.matchSecondSummoner"
                        class="img-summoner-spell"
                      />
                    </div>
                  </div>
                  <div class="group-runes me-2">
                    <div class="rune">
                      <img
                        src="https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
                        alt="Rune Arcane Comet"
                        class="img-rune"
                      />
                    </div>
                    <div class="rune">
                      <img
                        src="https://ddragon.canisback.com/img/perk-images/Styles/7203_Whimsy.png"
                        alt="Rune Whimsy"
                        class="img-rune"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 text-center">
                <div class="group-two">
                  <div class="group-stats me-2">
                    <div class="stats">
                      <span class="kill fw-bold">9</span>
                      <span class="slash">/</span>
                      <span class="death fw-bold text-danger">10</span>
                      <span class="slash">/</span>
                      <span class="assist fw-bold">12</span>
                    </div>
                    <div class="stats">
                      <span class="fw-bold">2.10</span> KDA
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="group-three">
                  <div class="group-items me-2">
                    <div class="item">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/6692.png"
                        alt="Item Serylda's Grudge"
                        class="img-item"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/6694.png"
                        alt="Item Eclipse"
                        class="img-item"
                      />
                    </div>
                  </div>
                  <div class="group-items me-2">
                    <div class="item">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/3042.png"
                        alt="Item Serylda's Grudge"
                        class="img-item"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/3009.png"
                        alt="Item Eclipse"
                        class="img-item"
                      />
                    </div>
                  </div>
                  <div class="group-items me-2">
                    <div class="item">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/6676.png"
                        alt="Item Serylda's Grudge"
                        class="img-item"
                      />
                    </div>
                    <div class="item">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/6676.png"
                        alt="Item Serylda's Grudge"
                        class="img-item"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsClass from "@/classes/RequestsClass";
import MathsClass from "@/classes/MathsClass";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);
const maths = new MathsClass();

export default {
  name: "CardMatchData",
  data() {
    return {
      versionDDragon: "",
      matchType: "",
      matchDuration: "",
      matchGameVersion: "",
      matchChampionName: "",
      matchFirstSummoner: "",
      matchSecondSummoner: "",
    };
  },
  props: {
    gameQueueId: Number,
    gameStartTimestamp: Number,
    gameEndTimestamp: Number,
    gameMatchVersion: String,
    gameParticipants: Array,
  },
  methods: {
    async getLatestVersion() {
      return await request.latestVersion();
    },
    async getMatchType(pQueueId) {
      return await request.matchType(pQueueId);
    },
    async getMatchDuration(pGameEndTimestamp, pGameStartTimestamp) {
      return maths.calcMsToTime(pGameEndTimestamp, pGameStartTimestamp);
    },
    async getMatchGameVersion(pGameMatchVersion) {
      return maths.calcSplitAndSpliceGameVersion(pGameMatchVersion);
    },
    async getMatchChampionName(pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          return value.championName;
        }
      }
    },
    async getFirstSummoner(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allSummoners(pVersionDDRagon);
          for (let summoner of Object.entries(result)) {
            if (value.summoner1Id === parseInt(summoner[1].key)) {
              return summoner[0];
            }
          }
        }
      }
    },
    async getSecondSummoner(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allSummoners(pVersionDDRagon);
          for (let summoner of Object.entries(result)) {
            if (value.summoner2Id === parseInt(summoner[1].key)) {
              return summoner[0];
            }
          }
        }
      }
    },
    async getRune() {},
  },
  async mounted() {
    this.versionDDragon = await this.getLatestVersion();
    this.matchType = await this.getMatchType(this.gameQueueId);
    this.matchDuration = await this.getMatchDuration(
      this.gameEndTimestamp,
      this.gameStartTimestamp
    );
    this.matchGameVersion = await this.getMatchGameVersion(
      this.gameMatchVersion
    );
    this.matchChampionName = await this.getMatchChampionName(
      this.gameParticipants
    );
    this.matchFirstSummoner = await this.getFirstSummoner(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchSecondSummoner = await this.getSecondSummoner(
      this.versionDDragon,
      this.gameParticipants
    );
  },
};
</script>

<style lang="scss" scoped>
// 2291e8
//background: #f08080 linear-gradient(0deg, rgba(50, 115, 250, 0.2), rgba(50, 115, 250, 0.2));
//border: #4250d1;
//color: white;
.group-one {
  .group-champion {
    .champion {
      .img-champion {
        border-radius: 20%;
        width: 3.4rem;
        height: 3.4rem;
      }
    }
  }
  .group-summoners-spells {
    .summoner-spell {
      .img-summoner-spell {
        width: 1.1rem;
        height: 1.1rem;
      }
    }
  }
  .group-runes {
    .rune {
      .img-rune {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
}
.group-three {
  display: inline-flex;
  .group-items {
    .item {
      .img-item {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>
