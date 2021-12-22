class ShipModel {
  constructor(props) {
    Object.assign(this, props);
  }

  attackEnemy() {
    const chance = SpaceBattle.rng(0, 100) / 100;

    if (this.accuracy > chance) this.enemy.damage(this.firepower);

    console.log(`${this.name} ${this.accuracy > chance ? 'hit' : 'missed'} ${this.enemy.name}`);
  }

  damage(d) {
    this.hull = Math.max(this.hull - d, 0);
  }

  setEnemy(enemy) {
    this.enemy = enemy;
  }
}
