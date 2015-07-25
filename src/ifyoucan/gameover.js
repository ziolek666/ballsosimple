'use strict';

import { prettyTime } from './util';

export const GameOver = {

  init: function(time) {
    this._score = time;
  },

  create: function() {
    var text = this.add.text(
      this.world.centerX, this.world.centerY, prettyTime(this._score),
      { font: '24px Arial', fill: '#fff', align: 'center' });
    text.anchor.setTo(0.5, 0.5);
  }

};
