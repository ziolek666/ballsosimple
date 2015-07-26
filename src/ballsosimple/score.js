'use strict';

import { prettyTime, drawText } from './util';

export const Score = {

	preload: function() {
		this._soundIntro = this.add.audio('audio-intro',1,true);
	},

  init: function(score) {
    this._score = score;
  },

  create: function() {
    drawText.call(this,
      'Can it be all so simple?\nYou survived ' +
      prettyTime(this._score) + ' minutes.', 32);

    if(this._soundIntro)
      this._soundIntro.play('',0,1,true);    

  }

};
