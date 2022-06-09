<template>
  <div class="card-champion-mastery">
    <div class="card mb-3 mx-auto" style="width: 12rem">
      <img
        :src="this.linkAsset + this.assetChampion"
        class="card-img-top"
        alt="League of Legends champions"
      />
      <div class="card-body">
        <h5 class="card-title text-center">{{ this.nameChampion }}</h5>
        <p class="card-text text-center fst-italic">
          {{ this.points }}
        </p>
        <div v-if="this.level === 1" class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="1799"
          ></div>
        </div>
        <div v-else-if="this.level === 2" class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="1800"
            aria-valuemin="0"
            aria-valuemax="4199"
          ></div>
        </div>
        <div v-else-if="this.level === 3" class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="4200"
            aria-valuemin="0"
            aria-valuemax="6599"
          ></div>
        </div>
        <div v-else-if="this.level === 4" class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="6600"
            aria-valuemin="0"
            aria-valuemax="8999"
          ></div>
        </div>
        <div
          v-else-if="this.level === 5 || this.level === 6 || this.level === 7"
          class="progress"
        >
          <div
            class="progress-bar w-100 progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="9000"
            aria-valuemin="0"
            aria-valuemax="9000"
          ></div>
        </div>
      </div>
      <div v-if="this.level === 1" class="card-footer text-center">
        Masteries {{ this.level }}
      </div>
      <div
        v-else-if="this.level === 2"
        class="card-footer text-center background-xxx"
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
        v-else-if="this.level === 4"
        class="card-footer text-center background-orange"
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
        v-else-if="this.level === 6"
        class="card-footer text-center background-pink"
      >
        Masteries {{ this.level }}
      </div>
      <div
        v-else-if="this.level === 7"
        class="card-footer text-center background-blue"
      >
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
.background-blue {
  background-color: #84dfd3;
}
.background-pink {
  background-color: #d09cd4;
}
.background-red {
  background-color: #c70039;
  color: white;
}
.background-orange {
  background-color: #fd8166;
}
.background-gold {
  background-color: #ffc300;
}
.background-xxx {
  background-color: #daf7a6;
}
</style>
