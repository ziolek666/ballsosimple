'use strict';

import { ads } from './ads';

const NUM_ADS = 19;

export function initPopups() {
  this._popups = this.add.group();

  this._popups.createMultiple(50, 'popups', 0, false);

  let i = this.rnd.between(0, NUM_ADS);
  this._popups.forEach(popup => makePopup.call(this, popup, i++ % NUM_ADS));

  this.time.events.add(Phaser.Timer.SECOND * 15, showPopup, this);
}

function makePopup(popup, i) {
  const ad = ads['popup' + i];
  const text = this.add.bitmapText(
    ad.x, ad.y, 'bmp1', ad.text[this.rnd.between(0, ad.text.length - 1)], 32);
  const button = this.add.button(6, 6, 'close1', () => popup.kill());
  popup.addChild(text);
  popup.addChild(button);
  popup.animations.add('idle', ad.frames, ad.fps, true);
}

function showPopup() {
  const popup = this._popups.getFirstDead();
  if (!popup) {
    return;
  }

  popup.reset(
    this.rnd.between(0, 100),
    this.rnd.between(0, 200));
  popup.animations.play('idle');

  this.time.events.add(Phaser.Timer.SECOND * 3, showPopup, this);
}
