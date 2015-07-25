'use strict';

export const GameOver = {

  create: function() {
    var text = this.add.text(
      this.world.centerX, this.world.centerY, 'game over',
      { font: '24px Arial', fill: '#fff', align: 'center' });
    text.anchor.setTo(0.5, 0.5);
  }

};
