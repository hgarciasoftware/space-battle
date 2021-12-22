class EnemyModel extends ShipModel {
  constructor(props) {
    super(props);

    this.setRandomHull();
    this.setRandomFirepower();
    this.setRandomAccuracy();
  }

  setRandomAccuracy() {
    this.accuracy = SpaceBattle.rng(60, 80) / 100;
  }

  setRandomFirepower() {
    this.firepower = SpaceBattle.rng(2, 4);
  }

  setRandomHull() {
    this.hull = SpaceBattle.rng(3, 6);
  }
}
