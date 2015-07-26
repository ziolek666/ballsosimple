'use strict';

export const Boot = {

  preload: function() {
    this.load.image('border', 'assets/border.png');
    this.load.image('progressbar', 'assets/progressbar.png');
  },

  create: function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.setScreenSize(true);
    this.game.state.start('preloader');
  }

};
