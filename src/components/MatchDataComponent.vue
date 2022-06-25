<template>
  <div class="match-data">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-xl-10">
        <div
          class="card mb-3"
          :class="this.matchPlayerIsWin ? 'is-win' : 'is-loose'"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-start">
                <div class="group-title mb-2">
                  <strong>{{ this.matchType }}</strong> ∙
                  {{ this.matchDuration }} ∙
                  <em>P{{ this.matchGameVersion }}</em>
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
                        :src="
                          'https://ddragon.canisback.com/img/' +
                          this.matchPrimaryRune[1]
                        "
                        :alt="this.matchPrimaryRune[0]"
                        class="img-rune"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      />
                    </div>
                    <div class="rune">
                      <img
                        :src="
                          'https://ddragon.canisback.com/img/' +
                          this.matchSecondaryRune[1]
                        "
                        :alt="this.matchSecondaryRune[0]"
                        class="img-rune"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 text-center">
                <div class="group-two">
                  <div class="group-stats me-2">
                    <div class="stats">
                      <span class="kill fw-bold">{{
                        this.matchPlayerScore[0]
                      }}</span>
                      <span class="slash">/</span>
                      <span class="death fw-bold text-danger">{{
                        this.matchPlayerScore[1]
                      }}</span>
                      <span class="slash">/</span>
                      <span class="assist fw-bold">{{
                        this.matchPlayerScore[2]
                      }}</span>
                    </div>
                    <div v-if="this.matchPlayerRatio !== 0" class="stats">
                      <span class="fw-bold">{{ this.matchPlayerRatio }}</span>
                      KDA
                    </div>
                    <div v-else class="stats">
                      <span class="fw-bold text-warning">Perfect</span> KDA
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="group-three">
                  <div class="group-items me-2">
                    <!-- ### First Champion Item ### -->
                    <div
                      v-if="this.matchPlayerFirstItems.length !== 0"
                      class="item"
                    >
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/item/' +
                          this.matchPlayerFirstItems[2]
                        "
                        :alt="this.matchPlayerFirstItems[1]"
                        class="img-item"
                      />
                    </div>
                    <div v-else class="item">
                      <div
                        class="no-item"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      ></div>
                    </div>
                    <!-- ### Second Champion Item ### -->
                    <div
                      v-if="this.matchPlayerSecondItems.length !== 0"
                      class="item"
                    >
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/item/' +
                          this.matchPlayerSecondItems[2]
                        "
                        :alt="this.matchPlayerSecondItems[1]"
                        class="img-item"
                      />
                    </div>
                    <div v-else class="item">
                      <div
                        class="no-item"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      ></div>
                    </div>
                  </div>
                  <div class="group-items me-2">
                    <!-- ### Third Champion Item ### -->
                    <div
                      v-if="this.matchPlayerThirdItems.length !== 0"
                      class="item"
                    >
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/item/' +
                          this.matchPlayerThirdItems[2]
                        "
                        :alt="this.matchPlayerThirdItems[1]"
                        class="img-item"
                      />
                    </div>
                    <div v-else class="item">
                      <div
                        class="no-item"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      ></div>
                    </div>
                    <!-- ### Fourth Champion Item ### -->
                    <div
                      v-if="this.matchPlayerFourthItems.length !== 0"
                      class="item"
                    >
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/item/' +
                          this.matchPlayerFourthItems[2]
                        "
                        :alt="this.matchPlayerFourthItems[1]"
                        class="img-item"
                      />
                    </div>
                    <div v-else class="item">
                      <div
                        class="no-item"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      ></div>
                    </div>
                  </div>
                  <div class="group-items me-2">
                    <!-- ### Fifth Champion Item ### -->
                    <div
                      v-if="this.matchPlayerFifthItems.length !== 0"
                      class="item"
                    >
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/item/' +
                          this.matchPlayerFifthItems[2]
                        "
                        :alt="this.matchPlayerFifthItems[1]"
                        class="img-item"
                      />
                    </div>
                    <div v-else class="item">
                      <div
                        class="no-item"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      ></div>
                    </div>
                    <!-- ### Sixt Champion Item ### -->
                    <div
                      v-if="this.matchPlayerSixthItems.length !== 0"
                      class="item"
                    >
                      <img
                        :src="
                          'https://ddragon.leagueoflegends.com/cdn/' +
                          this.versionDDragon +
                          '/img/item/' +
                          this.matchPlayerSixthItems[2]
                        "
                        :alt="this.matchPlayerSixthItems[1]"
                        class="img-item"
                      />
                    </div>
                    <div v-else class="item">
                      <div
                        class="no-item"
                        :class="
                          this.matchPlayerIsWin
                            ? 'background-img-win'
                            : 'background-img-loose'
                        "
                      ></div>
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
      matchPrimaryRune: [],
      matchSecondaryRune: [],
      matchPlayerScore: [],
      matchPlayerRatio: 0,
      matchPlayerFirstItems: [],
      matchPlayerSecondItems: [],
      matchPlayerThirdItems: [],
      matchPlayerFourthItems: [],
      matchPlayerFifthItems: [],
      matchPlayerSixthItems: [],
      matchPlayerIsWin: null,
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
    async getPrimaryRune(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allRunes(pVersionDDRagon);
          for (let runeName of Object.entries(result)) {
            if (runeName[1].id === value.perks.styles[0].style) {
              for (let rune of Object.entries(runeName[1].slots[0].runes)) {
                if (rune[1].id === value.perks.styles[0].selections[0].perk) {
                  return [rune[1].name, rune[1].icon];
                }
              }
            }
          }
        }
      }
    },
    async getSecondaryRune(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allRunes(pVersionDDRagon);
          for (let runeName of Object.entries(result)) {
            if (runeName[1].id === value.perks.styles[1].style) {
              return [runeName[1].name, runeName[1].icon];
            }
          }
        }
      }
    },
    async getPlayerScore(pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          return [value.kills, value.deaths, value.assists];
        }
      }
    },
    async getPlayerRatio(pPlayerScore) {
      return maths.calcPlayerRatio(
        pPlayerScore[0],
        pPlayerScore[1],
        pPlayerScore[2]
      );
    },
    async getMatchFirstItem(pVersionDDRagon, pGameParticipants) {
      let table = [];
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item0 !== 0 && parseInt(itemData[0]) === value.item0) {
              table = [value.item0, itemData[1].name, itemData[1].image.full];
            }
          }
          return table;
        }
      }
    },
    async getMatchSecondItem(pVersionDDRagon, pGameParticipants) {
      let table = [];
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item1 !== 0 && parseInt(itemData[0]) === value.item1) {
              table = [value.item1, itemData[1].name, itemData[1].image.full];
            }
          }
          return table;
        }
      }
    },
    async getMatchThirdItem(pVersionDDRagon, pGameParticipants) {
      let table = [];
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item2 !== 0 && parseInt(itemData[0]) === value.item2) {
              table = [value.item2, itemData[1].name, itemData[1].image.full];
            }
          }
          return table;
        }
      }
    },
    async getMatchFourthItem(pVersionDDRagon, pGameParticipants) {
      let table = [];
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item3 !== 0 && parseInt(itemData[0]) === value.item3) {
              table = [value.item3, itemData[1].name, itemData[1].image.full];
            }
          }
          return table;
        }
      }
    },
    async getMatchFifthItem(pVersionDDRagon, pGameParticipants) {
      let table = [];
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item4 !== 0 && parseInt(itemData[0]) === value.item4) {
              table = [value.item4, itemData[1].name, itemData[1].image.full];
            }
          }
          return table;
        }
      }
    },
    async getMatchSixthItem(pVersionDDRagon, pGameParticipants) {
      let table = [];
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item5 !== 0 && parseInt(itemData[0]) === value.item5) {
              table = [value.item5, itemData[1].name, itemData[1].image.full];
            }
          }
          return table;
        }
      }
    },
    async getMatchIsWin(pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          return value.win === true;
        }
      }
    },
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
    this.matchPrimaryRune = await this.getPrimaryRune(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchSecondaryRune = await this.getSecondaryRune(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchPlayerScore = await this.getPlayerScore(this.gameParticipants);
    this.matchPlayerRatio = await this.getPlayerRatio(this.matchPlayerScore);
    this.matchPlayerFirstItems = await this.getMatchFirstItem(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchPlayerSecondItems = await this.getMatchSecondItem(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchPlayerThirdItems = await this.getMatchThirdItem(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchPlayerFourthItems = await this.getMatchFourthItem(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchPlayerFifthItems = await this.getMatchFifthItem(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchPlayerSixthItems = await this.getMatchSixthItem(
      this.versionDDragon,
      this.gameParticipants
    );
    this.matchPlayerIsWin = await this.getMatchIsWin(this.gameParticipants);
  },
};
</script>

<style lang="scss" scoped>
.is-win {
  background: #468ffc
    linear-gradient(0deg, rgba(50, 115, 250, 0.2), rgba(50, 115, 250, 0.2));
  color: white;
  border-color: #4250d1;
}
.is-loose {
  background: #c84d4d
    linear-gradient(0deg, rgba(50, 115, 250, 0.2), rgba(50, 115, 250, 0.2));
  color: white;
}
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
        vertical-align: baseline;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  .group-runes {
    .rune {
      .img-rune {
        vertical-align: baseline;
        border-radius: 10%;
        padding: 2px;
        width: 1.5rem;
        height: 1.5rem;
      }
      .background-img-win {
        background-color: #4250d1;
        border-color: #468ffc;
      }
      .background-img-loose {
        background-color: #872a4b;
      }
    }
  }
}
.group-three {
  display: inline-flex;
  .group-items {
    .item {
      .img-item {
        vertical-align: baseline;
        width: 1.5rem;
        height: 1.5rem;
      }
      .no-item {
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: 6px;
      }
      .background-img-win {
        background-color: #4250d1;
        border-color: #468ffc;
      }
      .background-img-loose {
        background-color: #872a4b;
      }
    }
  }
}
</style>
