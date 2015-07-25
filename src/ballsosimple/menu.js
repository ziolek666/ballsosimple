'use strict';

export const Menu = {

  create: function() {
    this.add.sprite(0, 0, 'menu-cover');
    this.add.button(290, 270, 'menu-start',
      () => this.game.state.start('game'));
    // this.add.button(370, 270, 'menu-sound', () => undefined);
  }

};
