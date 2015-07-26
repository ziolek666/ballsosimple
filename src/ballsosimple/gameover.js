'use strict';

import { drawText } from './util';

export const GameOver = {

  init: function(time) {
    this._score = time;
  },

  create: function() {
    drawText.call(this, 'G A M E\nO V E R', 32);

    const showScore = () =>
      this.game.state.start('score', true, true, this._score);
    this.input.onUp.add(showScore);
    this.input.keyboard.onUpCallback = showScore;
  }

};
