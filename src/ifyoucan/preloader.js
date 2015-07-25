'use strict';

export const Preloader = {

  preload: function() {
    this.load.image('basket', '../assets/basket.png');
    this.load.image('ball', '../assets/ball.png');
    this.load.image('healthbar', '../assets/healthbar.png');
    this.load.image('popup1', '../assets/popup1.png');
    this.load.image('close1', '../assets/close1.png');
  },

  create: function() {
    this.game.state.start('game');
  }

};
