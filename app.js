const player = {
  model: new ShipModel({
    name: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: 0.7
  }),
  view: new CharacterView('left')
};
const invaders = Array.from({length: 6}, (_, i) => ({
  model: new EnemyModel({name: `Enemy #${i + 1}`}),
  view: new CharacterView('right')
}));
const spaceBattle = new SpaceBattle(player, invaders);

spaceBattle.start();

const {continueButton, escapeButton, fightButton} = spaceBattle.controls;

continueButton.addEventListener('click', () => spaceBattle.setInvader());
escapeButton.addEventListener('click', () => spaceBattle.escape());
fightButton.addEventListener('click', () => spaceBattle.fight());
