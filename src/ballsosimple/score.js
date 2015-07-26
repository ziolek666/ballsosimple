'use strict';

import { prettyTime } from './util';

export const Score = {

  init: function(score) {
    this._score = score;
  },

  create: function() {
    const text = this.add.bitmapText(
      this.world.centerX, this.world.centerY, 'bmp1',
      'Can it be all so simple?\nYou survived ' +
        prettyTime(this._score) + ' minutes.', 16);
    text.align = 'center';
    text.x -= text.width / 2;
    text.y -= text.height / 2;
  }

};
