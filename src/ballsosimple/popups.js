'use strict';

import { TIME_TO_FIRST_POPUP } from './config';
import { ads, NUM_ADS } from './ads';

export function initPopups() {
  this._popups = this.add.group();

  this._popups.createMultiple(100, 'popups', 0, false);

  let i = this.rnd.between(0, NUM_ADS);
  this._popups.forEach(popup => makePopup.call(this, popup, i++ % NUM_ADS));

  this.time.events.add(
    Phaser.Timer.SECOND * TIME_TO_FIRST_POPUP, showPopup, this);
}

function makePopup(popup, i) {
  const ad = ads['popup' + i];
  const text = this.add.bitmapText(
    ad.x, ad.y, 'bmp1', ad.text[this.rnd.between(0, ad.text.length - 1)], 32);
  const button = this.add.button(
    ad.but.x, ad.but.y, ad.but.name, () => popup.kill());
  popup.addChild(text);
  popup.addChild(button);
  popup.animations.add('idle', ad.frames, ad.fps, true);
}

function showPopup() {
  let i = 0;
  let popup;
  do {
    popup = this._popups.getRandom();
  } while (popup.alive && i++ < 10);

  popup.reset(
    this.rnd.between(0, 100),
    this.rnd.between(40, 160));
  popup.animations.play('idle');
  popup.bringToTop();

  this.time.events.add(Phaser.Timer.SECOND * delay.call(this), showPopup, this);
}

function delay() {
  const elapsed = Math.min(this._timeElapsed, 120);
  return Phaser.Math.mapLinear(elapsed, 0, 120, 6, 0.1);
}
