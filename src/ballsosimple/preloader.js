'use strict';

export const Preloader = {

  preload: function() {
    this.load.image('basket', '../assets/basket.png');
    this.load.image('ball', '../assets/ball.png');
    this.load.image('healthbar', '../assets/healthbar.png');
    this.load.image('close1', '../assets/close1.png');
    this.load.spritesheet('popups', '../assets/popups.png', 360, 240);
  },

  create: function() {
    this.game.state.start('game');
  }

};
