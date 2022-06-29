<template>
  <div class="home">
    <div class="container vh-100">
      <div class="row">
        <div class="col-12">
          <!-- Title & Subtitle -->
          <div class="group-title-page">
            <div class="title">
              <h1 class="h1 text-center">DEMYQEWIKI.GG</h1>
            </div>
            <div class="subtitle">
              <p class="fs-4 fst-italic text-center">
                Sniping
                <strong>{{
                  this.generateRandomSummoner(this.listSummonersName)
                }}</strong>
                has never been so easy
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Search summoner bar -->
      <div class="row d-flex justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-10">
          <div class="group-search">
            <div class="input-search">
              <div class="mb-3">
                <input
                  class="form-control"
                  id="exampleFormControlInput1"
                  type="text"
                  placeholder="Search Yourself or Anyone"
                  aria-label=".form-control-lg example"
                  disabled
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Subtext -->
      <div class="row">
        <div class="col-12">
          <div class="group-sub-text">
            <div class="sub-text">
              <p class="fs-4 fst-italic text-center">
                or choose one of the most viewed profiles
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Suggest profiles -->
      <div class="row mb-3">
        <div class="col-xxl-4 col-xl-4 col-12">
          <div class="group-suggest-profiles p-3 mb-3">
            <div class="suggest-profile">
              <img
                :src="this.listSummonersName[0].iconProfile"
                alt="Icon profile"
                class="me-2"
              />
              {{ this.listSummonersName[0].name }}
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-12">
          <div class="group-suggest-profiles p-3 mb-3">
            <div class="suggest-profile">
              <img
                :src="this.listSummonersName[1].iconProfile"
                alt="Icon profile"
                class="me-2"
              />
              {{ this.listSummonersName[1].name }}
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-12">
          <div class="group-suggest-profiles p-3 mb-3">
            <div class="suggest-profile">
              <img
                :src="this.listSummonersName[2].iconProfile"
                alt="Icon profile"
                class="me-2"
              />
              {{ this.listSummonersName[2].name }}
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-xxl-4 col-xl-4 col-12">
          <div class="group-suggest-profiles p-3 mb-3">
            <div class="suggest-profile">
              <img
                :src="this.listSummonersName[3].iconProfile"
                alt="Icon profile"
                class="me-2"
              />
              {{ this.listSummonersName[3].name }}
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-12">
          <div class="group-suggest-profiles p-3 mb-3">
            <div class="suggest-profile">
              <img
                :src="this.listSummonersName[4].iconProfile"
                alt="Icon profile"
                class="me-2"
              />
              <router-link
                :to="{
                  name: 'overview',
                  params: { summonerName: this.listSummonersName[4].name },
                }"
                >{{ this.listSummonersName[4].name }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsClass from "@/classes/RequestsClass";

const request = new RequestsClass(process.env.VUE_APP_API_KEY);

export default {
  name: "HomeView",
  data() {
    return {
      listSummonersName: [
        {
          id: 1,
          name: "Demyqewiki",
          iconProfile: "",
        },
        {
          id: 2,
          name: "PeeIsInBalls",
          iconProfile: "",
        },
        {
          id: 3,
          name: "Mathiii",
          iconProfile: "",
        },
        {
          id: 4,
          name: "clifligo",
          iconProfile: "",
        },
        {
          id: 5,
          name: "Sn0W3838",
          iconProfile: "",
        },
      ],
    };
  },
  methods: {
    generateRandomSummoner(pArraySummoners) {
      const index = Math.floor(Math.random() * pArraySummoners.length);
      return pArraySummoners[index].name;
    },
  },
  async mounted() {
    for (let index = 0; index < this.listSummonersName.length; index++) {
      this.listSummonersName[index].iconProfile =
        await request.icons.iconeSummonerProfileBySummonerName(
          this.listSummonersName[index].name
        );
    }
  },
};
</script>

<style scoped>
.group-suggest-profiles {
  background-color: #d0d3d4;
  border: solid black 1px;
  border-radius: 15px;
}
a {
  text-decoration: none;
  color: black;
}
img {
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
}
</style>
