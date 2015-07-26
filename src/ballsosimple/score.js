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
    this.soundIntro = this.add.audio('audio-intro',1,true);
    this.soundIntro.volume = 0.5;
    this.soundIntro.play('',0,1,true);
  }

};
