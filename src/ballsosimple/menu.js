'use strict';

export const Menu = {

  create: function() {
    this.add.sprite(0, 0, 'menu-cover');
    this.add.button(290, 270, 'menu-start',
      () => this.game.state.start('game'));
    // this.add.button(370, 270, 'menu-sound', () => undefined);
    this._soundIntro = this.add.audio('audio-intro',1,true);
    this._soundIntro.volume = 0.5;
    this._soundIntro.play('',0,1,true);
  }

};
