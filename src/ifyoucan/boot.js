'use strict';

export const Boot = {
  preload: function() {
    //this.load.image('preloaderBg', 'img/loading-bg.png');
    //this.load.image('preloaderBar', 'img/loading-bar.png');
  },
  create: function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.state.start('Preloader');

    const text = this.game.add.text(
      this.world.centerX, this.world.centerY, '…if you can',
      { font: '24px Arial', fill: '#fff', align: 'center' });
    text.anchor.setTo(0.5, 0.5);
  }

};
