'use strict';

export const Preloader = {

  preload: function() {
    this.load.image('basket', '../assets/basket.png');
    this.load.image('ball', '../assets/ball.png');
  },

  create: function() {
    this.game.state.start('game');
  }

};
