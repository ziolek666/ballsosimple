'use strict';

import { prettyTime, drawText } from './util';

export const Score = {

  init: function(score) {
    this._score = score;
  },

  create: function() {
    drawText.call(this,
      'Can it be all so simple?\nYou survived ' +
      prettyTime(this._score) + ' minutes.', 32);
  }

};
