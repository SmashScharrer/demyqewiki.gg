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
                <div class="group-one d-flex p-2 align-items-center">
                  <div class="group-champion me-2">
                    <div class="champion">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Sett.png"
                        alt="Sett"
                        class="img-champion"
                      />
                    </div>
                  </div>
                  <div class="group-summoners-spells me-2">
                    <div class="summoner-spell">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/SummonerFlash.png"
                        alt="Summoner Spell Flash"
                        class="img-summoner-spell"
                      />
                    </div>
                    <div class="summoner-spell">
                      <img
                        src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/SummonerHeal.png"
                        alt="Summoner Spell Heal"
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
                <div class="group-two p-2">
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
                <div class="group-three p-2">
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
      matchType: "",
      matchDuration: "",
      matchGameVersion: "",
    };
  },
  props: {
    gameTypeId: Number,
    gameStartTimestamp: Number,
    gameEndTimestamp: Number,
    gameMatchVersion: String,
  },
  methods: {
    async getMatchType() {
      return await request.matchType();
    },
    getMatchDuration() {
      return maths.calcMsToTime(this.gameEndTimestamp, this.gameStartTimestamp);
    },
    getMatchGameVersion() {
      return maths.calcSplitAndSpliceGameVersion(this.gameMatchVersion);
    },
    async getSummonerSpell() {},
    async getRune() {},
  },
  async mounted() {
    this.matchType = await this.getMatchType();
    this.matchDuration = this.getMatchDuration();
    this.matchGameVersion = this.getMatchGameVersion();
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
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .group-summoners-spells {
    .summoner-spell {
      .img-summoner-spell {
        width: 1.2rem;
        height: 1.2rem;
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
