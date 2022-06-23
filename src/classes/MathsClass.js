export default class MathsClass {
  constructor() {}

  calcMinPoints(pChampionPoints, pChampionPointsSinceLastLevel) {
    return (
      parseInt(pChampionPoints, 10) -
      parseInt(pChampionPointsSinceLastLevel, 10)
    );
  }

  calcMaxPoints(pChampionPoints, pChampionPointsUntilNextLevel) {
    return (
      parseInt(pChampionPoints, 10) -
      parseInt(pChampionPointsUntilNextLevel, 10)
    );
  }

  calcPourcentLevel(pChampionPoints, pChampionPointsUntilNextLevel) {
    return (
      (parseInt(pChampionPoints, 10) * 100) /
      (parseInt(pChampionPoints, 10) +
        parseInt(pChampionPointsUntilNextLevel, 10))
    );
  }

  calcMsToTime(pMillisecondsEnd, pMillisecondsStart) {
    let result = parseInt(pMillisecondsEnd) - parseInt(pMillisecondsStart),
      seconds = Math.floor((result / 1000) % 60),
      minutes = Math.floor((result / (1000 * 60)) % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  }

  calcSplitAndSpliceGameVersion(pMatchGameVersion) {
    let result = pMatchGameVersion.split(".");
    return result.splice(0, 2).join(".");
  }

  calcPlayerRatio(pNumberKills, pNumberDeaths, pNumberAssists) {
    const result =
      (parseInt(pNumberKills, 10) + parseInt(pNumberAssists, 10)) /
      parseInt(pNumberDeaths, 10);
    return result.toFixed(2);
  }
}
