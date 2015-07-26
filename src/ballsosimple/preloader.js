'use strict';

export const Preloader = {

  preload: function() {
    this.load.image('basket', 'assets/basket.png');
    this.load.image('healthbox', 'assets/healthbox.png');
    this.load.image('healthbar', 'assets/healthbar.png');
    this.load.image('close1', 'assets/close1.png');
    this.load.spritesheet('spikes', 'assets/spikes.png', 15, 15);
    this.load.spritesheet('ball', 'assets/ball.png', 48, 48);
    this.load.spritesheet('popups', 'assets/popups.png', 360, 180);

    this.load.bitmapFont(
      'bmp1', 'assets/fonts/bmp1.png', 'assets/fonts/bmp1.fnt');

    this.load.image('menu-cover', 'assets/covers/menu.png');
    this.load.image('menu-start', 'assets/covers/start.png');
    this.load.spritesheet('menu-sound', 'assets/covers/sound.png', 86, 37);
  },

  create: function() {
    this.game.state.start('menu');
  }

};
