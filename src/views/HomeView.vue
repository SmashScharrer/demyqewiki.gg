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
                  this.getRandomSummoner(this.listSummonersName)
                }}</strong>
                has never been so easy
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Search summoner bar -->
      <div class="row d-flex justify-content-center">
        <div class="col-8">
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
      <!-- Table viewed profiles -->
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-xl-8">
          <div class="group-table-profiles">
            <div class="table-profiles">
              <div class="table-responsive">
                <table class="table table-bordered table-primary">
                  <thead>
                    <tr>
                      <th scope="col">Rank</th>
                      <th scope="col">Summoner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in listSummonersName" v-bind:key="item.id">
                      <th scope="row">RANK</th>
                      <td>
                        <router-link
                          :to="{
                            name: 'overview',
                            params: { summonerName: item.name },
                          }"
                          >{{ item.name }}</router-link
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      listSummonersName: [
        {
          id: 1,
          name: "Demyqewiki",
          rank: "",
          icone: "",
        },
        {
          id: 2,
          name: "PeeIsInBalls",
          rank: "",
          icone: "",
        },
        {
          id: 3,
          name: "Mathiii",
          rank: "",
          icone: "",
        },
        {
          id: 4,
          name: "clifligo",
          rank: "",
          icone: "",
        },
        {
          id: 5,
          name: "Sn0W3838",
          rank: "",
          icone: "",
        },
      ],
    };
  },
  methods: {
    getRandomSummoner(pArraySummoners) {
      const index = Math.floor(Math.random() * pArraySummoners.length);
      return pArraySummoners[index].name;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.table th {
  text-align: center;
}
.table td {
  text-align: center;
}
a {
  text-decoration: none;
}
img {
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
}
</style>
