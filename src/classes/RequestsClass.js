import axios from "axios";

export default class RequestsClass {
  constructor(pApiKey) {
    this.host = "https://demyqewiki-api.herokuapp.com";
    this.hostDDragon = "https://ddragon.leagueoflegends.com";
    this.hostAPI = "https://euw1.api.riotgames.com";
    this.apiKey = pApiKey;
    this.config = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };
  }

  /* # Version requests # */
  get version() {
    return {
      lastest: async () => {
        const request = await axios.get(
          `${this.host}/version/lastest`,
          this.config
        );
        return request.data;
      },
      all: async () => {
        const request = await axios.get(`${this.host}/versions`, this.config);
        return request.data;
      },
    };
  }

  /* # Summoner requests # */
  get summoner() {
    return {
      accountBySummonerName: async (pSummonerName) => {
        const request = await axios.get(
          `${this.host}/summoner/${pSummonerName}`,
          this.config
        );
        return request.data;
      },
    };
  }

  /* # Champion requests # */
  get champion() {
    return {
      all: async () => {
        const request = await axios.get(`${this.host}/champions`, this.config);
        return request.data;
      },
    };
  }

  /* # Champion mastery requests # */
  get mastery() {
    return {
      all: async (pSummonerName) => {
        const request = await axios.get(
          `${this.host}/champion-masteries/${pSummonerName}`,
          this.config
        );
        return request.data;
      },
    };
  }

  /* # Icon summoner profile # */
  get icon() {
    return {
      all: async () => {
        const request = await axios.get(
          `${this.host}/icon-profile`,
          this.config
        );
        return request.data;
      },
      iconProfileBySummonerName: async (pSummonerName) => {
        const request = await axios.get(
          `${this.host}/icon-profile/${pSummonerName}`,
          this.config
        );
        return request.data;
      },
    };
  }

  // get league() {
  //   return {
  //     leagueRankBySummonerId: async (pSummonerName) => {
  //       const request = await axios.get(
  //         `${this.host}/league/${pSummonerName}`,
  //         this.config
  //       );
  //       return request.data;
  //     },
  //   };
  // }

  async latestVersion() {
    const request = await axios.get(
      this.hostDDragon + "/api/versions.json",
      this.config
    );
    return request.data[0];
  }

  async allMatchs(pSummonerPUUID) {
    const request = await axios.get(
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${pSummonerPUUID}/ids?api_key=${this.apiKey}&start=0&count=4`,
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
