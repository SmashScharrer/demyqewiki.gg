import axios from "axios";

export default class RequestsClass {
  constructor(pApiKey) {
    this.hostDDragon = "https://ddragon.leagueoflegends.com";
    this.hostAPI = "https://euw1.api.riotgames.com";
    this.apiKey = pApiKey;
    this.config = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };
  }

  async latestVersion() {
    const request = await axios.get(
      this.hostDDragon + "/api/versions.json",
      this.config
    );
    return request.data[0];
  }

  async allChampions(pVersion) {
    const request = await axios.get(
      this.hostDDragon + `/cdn/${pVersion}/data/fr_FR/champion.json`,
      this.config
    );
    return request.data.data;
  }

  async allChampionsMasteries(pSummoner) {
    const request = await axios.get(
      this.hostAPI +
        `/lol/champion-mastery/v4/champion-masteries/by-summoner/${pSummoner}?api_key=${this.apiKey}`,
      this.config
    );
    return request.data;
  }
}
