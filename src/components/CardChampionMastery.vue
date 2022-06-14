<template>
  <div class="card-champion-mastery">
    <div class="card mb-3 mx-auto" style="width: 12rem">
      <!-- Champion Mastery Asset -->
      <img
        :src="this.assetChampion"
        class="card-img-top"
        alt="Logo Champion Asset"
      />

      <!-- Champion Mastery Content -->
      <div class="card-body">
        <!-- Champion Name -->
        <h5 class="card-title text-center">{{ this.nameChampion }}</h5>
        <!-- Champion Points -->
        <p class="card-text text-center fst-italic m-2 p-0">
          {{ this.pointsChampion.toLocaleString() }}
        </p>
        <!-- Champion Tokens Earned -->
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
            <!-- Champion Progress Bar -->
            <div class="progress mt-3 mb-2">
              <div
                class="progress-bar bg-info progress-bar-striped"
                :style="{ width: this.pourcentLevelChampion + '%' }"
                role="progressbar"
                :aria-valuenow="this.pointsChampion"
                :aria-valuemin="this.pointsMinLevelChampion"
                :aria-valuemax="this.pointsMaxLevelChampion"
              ></div>
            </div>
          </div>
        </div>
        <!-- Champion Chest -->
        <div class="text-center">
          <img
            v-if="this.isChestGrantedChampion"
            class="chest mt-2 p-0"
            src="@/assets/chestMastery.png"
            alt="Logo Chest"
          />
          <img
            v-else
            class="chest chestNotEarned mt-2 p-0"
            src="@/assets/chestMastery.png"
            alt="Logo Chest Not Earned"
          />
        </div>
      </div>

      <!-- Champion Mastery Level -->
      <div v-if="this.levelChampion === 7">
        <div class="card-footer background-blue">
          <p class="text-center m-0 p-0 fw-bold">
            Masteries {{ this.levelChampion }}
          </p>
        </div>
      </div>
      <div v-else-if="this.levelChampion === 6">
        <div class="card-footer background-pink">
          <p class="text-center m-0 p-0 fw-bold">
            Masteries {{ this.levelChampion }}
          </p>
        </div>
      </div>
      <div v-else-if="this.levelChampion === 5">
        <div class="card-footer background-red">
          <p class="text-center m-0 p-0 fw-bold text-white">
            Masteries {{ this.levelChampion }}
          </p>
        </div>
      </div>
      <div v-else-if="this.levelChampion === 4">
        <div class="card-footer background-orange">
          <p class="text-center m-0 p-0 fw-bold">
            Masteries {{ this.levelChampion }}
          </p>
        </div>
      </div>
      <div v-else-if="this.levelChampion === 3">
        <div class="card-footer background-gold">
          <p class="text-center m-0 p-0 fw-bold">
            Masteries {{ this.levelChampion }}
          </p>
        </div>
      </div>
      <div v-else-if="this.levelChampion === 2">
        <div class="card-footer background-yellow">
          <p class="text-center m-0 p-0 fw-bold">
            Masteries {{ this.levelChampion }}
          </p>
        </div>
      </div>
      <div v-else>
        <div class="card-footer">
          <p class="text-center m-0 p-0 fw-bold">
            Masteries {{ this.levelChampion }}
          </p>
        </div>
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
    assetChampion: String,
    pointsChampion: Number,
    pointsMinLevelChampion: Number,
    pointsMaxLevelChampion: Number,
    pourcentLevelChampion: Number,
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
  height: 42px;
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
