<template>
  <div class="card-champion-mastery">
    <div class="card mb-3 mx-auto" style="width: 12rem">
      <!-- Champion Mastery Asset -->
      <img
        :src="this.linkAsset + this.assetChampion"
        class="card-img-top"
        alt="Logo Champion Asset"
      />

      <!-- Champion Mastery Content -->
      <div class="card-body">
        <h5 class="card-title text-center">{{ this.nameChampion }}</h5>
        <p class="card-text text-center fst-italic">
          {{ this.points.toLocaleString() }}
        </p>
        <div class="text-center">
          <div v-if="this.level === 7">
            <img
              class="token"
              src="@/assets/tokenMastery.png"
              alt="Logo Mastery"
            />
            <img
              class="token"
              src="@/assets/tokenMastery.png"
              alt="Logo Mastery"
            />
            <img
              class="token"
              src="@/assets/tokenMastery.png"
              alt="Logo Mastery"
            />
          </div>
          <div v-else-if="this.level === 6">
            <div v-if="this.tokensEarned === 0">
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
            </div>
            <div v-else-if="this.tokensEarned === 1">
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
            </div>
            <div v-else-if="this.tokensEarned === 2">
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
            </div>
            <div v-else-if="this.tokensEarned === 3">
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
            </div>
          </div>
          <div v-else-if="this.level === 5">
            <div v-if="this.tokensEarned === 0">
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
            </div>
            <div v-else-if="this.tokensEarned === 1">
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
            </div>
            <div v-else-if="this.tokensEarned === 2">
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
              <img
                class="token tokenNotEarned"
                src="@/assets/tokenMastery.png"
                alt="Logo Mastery"
              />
            </div>
          </div>
          <div v-else>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <img
            v-if="this.isChestGranted"
            class="chest"
            src="@/assets/chestMastery.png"
            alt="Logo Chest"
          />
          <img
            v-else
            class="chest chestNotEarned"
            src="@/assets/chestMastery.png"
            alt="Logo Chest Not Earned"
          />
        </div>
      </div>

      <!-- Champion Mastery Level -->
      <div
        v-if="this.level === 7"
        class="card-footer text-center background-blue"
      >
        Masteries {{ this.level }}
      </div>
      <div
        v-else-if="this.level === 6"
        class="card-footer text-center background-pink"
      >
        Masteries {{ this.level }}
      </div>
      <div
        v-else-if="this.level === 5"
        class="card-footer text-center background-red"
      >
        Masteries {{ this.level }}
      </div>
      <div
        v-else-if="this.level === 4"
        class="card-footer text-center background-orange"
      >
        Masteries {{ this.level }}
      </div>
      <div
        v-else-if="this.level === 3"
        class="card-footer text-center background-gold"
      >
        Masteries {{ this.level }}
      </div>
      <div
        v-else-if="this.level === 2"
        class="card-footer text-center background-yellow"
      >
        Masteries {{ this.level }}
      </div>
      <div v-else class="card-footer text-center">
        Masteries {{ this.level }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CardChampionMastery",
  data() {
    return {
      linkAsset: "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/",
      nameChampion: "",
      assetChampion: "",
    };
  },

  props: {
    id: Number,
    points: Number,
    level: Number,
    tokensEarned: Number,
    isChestGranted: Boolean,
  },

  methods: {
    async getChampions() {
      await axios
        .get(
          "http://ddragon.leagueoflegends.com/cdn/12.10.1/data/fr_FR/champion.json"
        )
        .then((response) => {
          Object.entries(response.data.data).forEach(([cle, valeur]) => {
            if (parseInt(valeur.key, 10) === parseInt(this.id, 10)) {
              this.nameChampion = cle;
              this.assetChampion = valeur.image.full;
            }
          });
        });
    },
  },

  mounted() {
    this.getChampions();
  },
};
</script>

<style scoped>
.token {
  height: 26px;
}
.tokenNotEarned {
  filter: brightness(1%) opacity(15%);
}
.chest {
  height: 38px;
}
.chestNotEarned {
  filter: brightness(1%) opacity(15%);
}
.background-blue {
  background-color: #84dfd3;
}
.background-pink {
  background-color: #d09cd4;
}
.background-red {
  background-color: #c70039;
}
.background-orange {
  background-color: #fd8166;
}
.background-gold {
  background-color: #ffc300;
}
.background-yellow {
  background-color: #daf7a6;
}
</style>
