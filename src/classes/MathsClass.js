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
}
