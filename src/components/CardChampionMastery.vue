<template>
  <div class="card-champion-mastery">
    <div class="card mb-3 mx-auto" style="width: 12rem">
      <!-- Champion Mastery Asset -->
      <img
        src="http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sett.png"
        class="card-img-top"
        alt="Logo Champion Asset"
      />

      <!-- Champion Mastery Content -->
      <div class="card-body">
        <h5 class="card-title text-center">{{ this.nameChampion }}</h5>
        <p class="card-text text-center fst-italic">
          {{ this.pointsChampion.toLocaleString() }}
        </p>
        <div class="text-center">
          <div v-if="this.levelChampion === 7">
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
          <div v-else-if="this.levelChampion === 6">
            <div v-if="this.tokensEarnedChampion === 0">
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
            <div v-else-if="this.tokensEarnedChampion === 1">
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
            <div v-else-if="this.tokensEarnedChampion === 2">
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
            <div v-else-if="this.tokensEarnedChampion === 3">
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
          <div v-else-if="this.levelChampion === 5">
            <div v-if="this.tokensEarnedChampion === 0">
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
            <div v-else-if="this.tokensEarnedChampion === 1">
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
            <div v-else-if="this.tokensEarnedChampion === 2">
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
            v-if="this.isChestGrantedChampion"
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
        v-if="this.levelChampion === 7"
        class="card-footer text-center background-blue"
      >
        Masteries {{ this.levelChampion }}
      </div>
      <div
        v-else-if="this.levelChampion === 6"
        class="card-footer text-center background-pink"
      >
        Masteries {{ this.levelChampion }}
      </div>
      <div
        v-else-if="this.levelChampion === 5"
        class="card-footer text-center background-red"
      >
        Masteries {{ this.levelChampion }}
      </div>
      <div
        v-else-if="this.levelChampion === 4"
        class="card-footer text-center background-orange"
      >
        Masteries {{ this.levelChampion }}
      </div>
      <div
        v-else-if="this.levelChampion === 3"
        class="card-footer text-center background-gold"
      >
        Masteries {{ this.levelChampion }}
      </div>
      <div
        v-else-if="this.levelChampion === 2"
        class="card-footer text-center background-yellow"
      >
        Masteries {{ this.levelChampion }}
      </div>
      <div v-else class="card-footer text-center">
        Masteries {{ this.levelChampion }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardChampionMastery",
  props: {
    idChampion: Number,
    nameChampion: String,
    pointsChampion: Number,
    levelChampion: Number,
    tokensEarnedChampion: Number,
    isChestGrantedChampion: Boolean,
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
