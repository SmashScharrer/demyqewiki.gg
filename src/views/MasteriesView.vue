<template>
  <div class="masteries">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="h1 text-center">Champions Masteries</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div
            v-for="champion in listChampions.data"
            :key="champion.key"
            class="card mb-3 mx-auto"
            style="width: 18rem"
          >
            <img
              :src="getChampionAsset(champion.name)"
              class="card-img-top"
              alt="Logo champion Lol"
            />
            <div class="card-body">
              <h5 class="card-title text-center">{{ champion.name }}</h5>
              <p class="card-text text-center fst-italic">
                {{ champion.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// axios.defaults.baseURL = "https://euw1.api.riotgames.com";

export default {
  name: "MasteriesView",
  data() {
    return {
      listChampions: [],
      listChampionsMasteries: {},
    };
  },
  methods: {
    getChampionAsset(nameChampion) {
      switch (nameChampion) {
        case "Aurelion Sol":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/AurelionSol.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Cho'Gath":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Chogath.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Dr. Mundo":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/DrMundo.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Jarvan IV":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/JarvanIV.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Kai'Sa":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kaisa.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Kha'Zix":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Khazix.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Kog'Maw":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/KogMaw.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "LeBlanc":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Leblanc.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Lee Sin":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/LeeSin.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Maître Yi":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MasterYi.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Miss Fortune":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MissFortune.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Wukong":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MonkeyKing.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Nunu et Willump":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nunu.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Rek'Sai":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/RekSai.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Renata Glasc":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Renata.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Séraphine":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Seraphine.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Tahm Kench":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/TahmKench.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Twisted Fate":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/TwistedFate.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Vel'Koz":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Velkoz.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Xin Zhao":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/XinZhao.png";
          // eslint-disable-next-line no-unreachable
          break;
        case "Zoé":
          return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zoe.png";
          // eslint-disable-next-line no-unreachable
          break;
        default:
          return (
            "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/" +
            nameChampion +
            ".png"
          );
          // eslint-disable-next-line no-unreachable
          break;
      }
    },
    async getChampions() {
      await axios
        .get(
          "http://ddragon.leagueoflegends.com/cdn/12.10.1/data/fr_FR/champion.json"
        )
        .then((response) => {
          this.listChampions = response.data;
        });
    },
  },
  mounted() {
    this.getChampions();
  },
};
</script>

<style scoped></style>
