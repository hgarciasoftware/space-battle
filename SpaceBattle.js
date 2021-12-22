class SpaceBattle {
  constructor(player, invaders) {
    this.player = player;
    this.invaders = invaders;
    this.controls = {
      continueButton: document.querySelector('#continue'),
      escapeButton: document.querySelector('#escape'),
      fightButton: document.querySelector('#fight')
    };
    this.started = false;
  }

  escape() {
    this.player.view.changeImage('surrender');
    this.invader.view.changeImage('enemy');
    this.updateControls('escape');
  }

  fight() {
    // TODO: split this method into two
    this.player.model.attackEnemy();
    this.invader.view.updateStats();

    if (this.invader.model.hull === 0) {
      this.invader.view.changeImage('explosion');

      setTimeout(() => {
        alert('VICTORY');

        this.updateControls('afterFight');
      }, 200);
    } else {
      setTimeout(() => {
        alert('ENEMY ATTACK');

        this.invader.model.attackEnemy();
        this.player.view.updateStats();

        if (this.player.model.hull === 0) {
          this.player.view.changeImage('explosion');

          setTimeout(() => {
            alert('DEFEAT');

            this.updateControls('lose');
          }, 200);
        }
      }, 200);
    }
  }

  setInvader() {
    if (this.invaders.length === 0) return this.win();

    const invader = this.invaders.shift();

    this.player.model.setEnemy(invader.model);
    invader.model.setEnemy(this.player.model);

    invader.view.setModel(invader.model);
    invader.view.changeImage('enemy');
    invader.view.updateStats();

    this.invader = invader;

    if (this.started) this.updateControls('fight');
  }

  start() {
    player.view.setModel(player.model);
    player.view.updateStats();
    this.setInvader();

    this.started = true;
  }

  updateControls(act) {
    const {fightButton, continueButton, escapeButton} = this.controls;

    switch (act) {
    case 'afterFight':
    case 'fight':
      fightButton.classList.toggle('hide');
      continueButton.classList.toggle('hide');
      escapeButton.disabled = !escapeButton.disabled;
      break;
    case 'escape':
    case 'win':
      continueButton.disabled = true;
      escapeButton.disabled = true;
      break;
    case 'lose':
      fightButton.disabled = true;
      break;
    }
  }

  win() {
    this.invader.view.changeImage('you-win');
    this.updateControls('win');
  }

  static rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
