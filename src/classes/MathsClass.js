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
    // hours = Math.floor((pMilliseconds / (1000 * 60 * 60)) % 24)

    // hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // return hours + ":" + minutes + ":" + seconds
    return minutes + ":" + seconds;
  }
}
