'use strict';

import { prettyTime } from './util';

export const GameOver = {

  init: function(time) {
    this._score = time;
  },

  create: function() {
    const text = this.add.bitmapText(
      this.world.centerX, this.world.centerY, 'bmp1',
      'Can it be all so simple?\nYou survived ' +
        prettyTime(this._score) + ' minutes.', 16);
    text.x -= text.width / 2;
    text.y -= text.height / 2;
  }

};
