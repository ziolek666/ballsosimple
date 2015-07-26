'use strict';

export const GameOver = {

  init: function(time) {
    this._score = time;
  },

  create: function() {
    const text = this.add.bitmapText(
      this.world.centerX, this.world.centerY, 'bmp1',
      'G A M E\nO V E R', 32);
    text.align = 'center';
    text.x -= text.width / 2;
    text.y -= text.height / 2;

    const showScore = () =>
      this.game.state.start('score', true, true, this._score);

    this.input.onUp.add(showScore);
    this.input.keyboard.onUpCallback = showScore;
  }

};
