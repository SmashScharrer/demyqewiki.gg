<template>
  <div class="card-match-data">
    <div class="card mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <div
              class="group-one d-flex justify-content-center align-items-center"
            >
              <div class="group-champion">
                <div class="champion">
                  <img
                    src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Sett.png"
                    alt="Sett"
                    class="img-champion"
                  />
                </div>
              </div>
              <div class="group-summoners-spells">
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
              <div class="group-runes">
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
          <div class="col">
            <div class="group-two d-flex justify-content-center">
              <div class="group-stats">
                <div class="score fs-6 text-center">
                  <span class="kill fw-bold">9</span>
                  <span class="slash">/</span>
                  <span class="death fw-bold text-danger">10</span>
                  <span class="slash">/</span>
                  <span class="assist fw-bold">12</span>
                </div>
                <div class="KDA text-center">
                  <span class="fw-bold">2.10</span> KDA
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="group-three d-flex justify-content-around">
              <div class="group-items">
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
              <div class="group-items">
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
              <div class="group-items">
                <div class="item">
                  <img
                    src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/6676.png"
                    alt="Item Serylda's Grudge"
                    class="img-item"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/3036.png"
                    alt="Item Eclipse"
                    class="img-item"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMatchData",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

.card {
  // 2291e8
  background: #f08080
    linear-gradient(0deg, rgba(50, 115, 250, 0.2), rgba(50, 115, 250, 0.2));
  border: #4250d1;
  color: white;
  font-family: Roboto, sans-serif;

  .card-body {
    .group-one {
      .group-champion {
        .champion {
          .img-champion {
            border-radius: 20%;
            width: 4rem;
            height: 4rem;
          }
        }
      }

      .group-summoners-spells {
        margin: 1px 0.6rem;

        .summoner-spell {
          .img-summoner-spell {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }

      .group-runes {
        .rune {
          .img-rune {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
    .group-three {
      .group-items {
        .item {
          .img-item {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
