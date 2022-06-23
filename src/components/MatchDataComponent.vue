<template>
  <div class="match-data">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-xl-10">
        <div class="card mb-3">
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
                    <div class="stats">
                      <span class="fw-bold">{{ this.matchPlayerRatio }}</span>
                      KDA
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="group-three">
                  <div class="group-items me-2">
                    <div class="item">
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
                    <div class="item">
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
                  </div>
                  <div class="group-items me-2">
                    <div class="item">
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
                    <div class="item">
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
                  </div>
                  <div class="group-items me-2">
                    <div class="item">
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
                    <div class="item">
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
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item0 !== 0 && parseInt(itemData[0]) === value.item0) {
              return [value.item0, itemData[1].name, itemData[1].image.full];
            }
          }
        }
      }
    },
    async getMatchSecondItem(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item1 !== 0 && parseInt(itemData[0]) === value.item1) {
              return [value.item1, itemData[1].name, itemData[1].image.full];
            }
          }
        }
      }
    },
    async getMatchThirdItem(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item2 !== 0 && parseInt(itemData[0]) === value.item2) {
              return [value.item2, itemData[1].name, itemData[1].image.full];
            }
          }
        }
      }
    },
    async getMatchFourthItem(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item3 !== 0 && parseInt(itemData[0]) === value.item3) {
              return [value.item3, itemData[1].name, itemData[1].image.full];
            }
          }
        }
      }
    },
    async getMatchFifthItem(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item4 !== 0 && parseInt(itemData[0]) === value.item4) {
              return [value.item4, itemData[1].name, itemData[1].image.full];
            }
          }
        }
      }
    },
    async getMatchSixthItem(pVersionDDRagon, pGameParticipants) {
      for (const value of pGameParticipants) {
        if (value.summonerName === "Sn0W3838") {
          const result = await request.allItems(pVersionDDRagon);
          for (let itemData of Object.entries(result)) {
            if (value.item5 !== 0 && parseInt(itemData[0]) === value.item5) {
              return [value.item5, itemData[1].name, itemData[1].image.full];
            }
          }
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
