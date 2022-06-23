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

  async summonerAccount() {
    const request = await axios.get(
      this.hostAPI +
        `/lol/summoner/v4/summoners/by-name/Sn0W3838?api_key=${this.apiKey}`,
      this.config
    );
    return request.data;
  }

  async allMatchs(pSummonerPUUID) {
    const request = await axios.get(
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${pSummonerPUUID}/ids?api_key=${this.apiKey}&start=0&count=3`,
      this.config
    );
    return request.data;
  }

  async match(pMatchID) {
    const request = await axios.get(
      `https://europe.api.riotgames.com/lol/match/v5/matches/${pMatchID}?api_key=${this.apiKey}`,
      this.config
    );
    return request.data;
  }

  async matchType(pQueueId) {
    const request = await axios.get(
      `https://static.developer.riotgames.com/docs/lol/queues.json`,
      this.config
    );
    for (const value of request.data) {
      if (value.queueId === pQueueId) {
        return value.description;
      }
    }
  }

  async allSummoners(pVersion) {
    const request = await axios.get(
      this.hostDDragon + `/cdn/${pVersion}/data/fr_FR/summoner.json`,
      this.config
    );
    return request.data.data;
  }

  async allRunes(pVersion) {
    const request = await axios.get(
      this.hostDDragon + `/cdn/${pVersion}/data/fr_FR/runesReforged.json`,
      this.config
    );
    return request.data;
  }

  async allItems(pVersion) {
    const request = await axios.get(
      this.hostDDragon + `/cdn/${pVersion}/data/fr_FR/item.json`,
      this.config
    );
    return request.data.data;
  }
}
