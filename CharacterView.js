class CharacterView {
  constructor(side) {
    const characterViewNode = document.querySelector(`.mainCharacterView.${side}`);
    const imageSelector = side === 'left' ? '.playerImage' : '.enemyImage';

    this.imageNode = characterViewNode.querySelector(imageSelector);

    this.setHullNode(characterViewNode);
    this.setFirepowerNode(characterViewNode);
    this.setAccuracyNode(characterViewNode);

    this.characterViewNode = characterViewNode;
  }

  changeImage(image) {
    this.imageNode.style['background-image'] = `url(./images/${image}.gif)`;
  }

  setAccuracyNode(characterViewNode) {
    this.accuracyNode = characterViewNode.querySelector('.accuracy');
  }

  setFirepowerNode(characterViewNode) {
    this.firepowerNode = characterViewNode.querySelector('.firepower');
  }

  setHullNode(characterViewNode) {
    this.hullNode = characterViewNode.querySelector('.hull');
  }

  setModel(model) {
    this.model = model;
  }

  updateStats() {
    this.accuracyNode.textContent = `Accuracy : ${this.model.accuracy}`;
    this.firepowerNode.textContent = `FirePower : ${this.model.firepower}`;
    this.hullNode.textContent = `Hull : ${this.model.hull}`;
  }
}
