'use strict';

import { ads } from './ads';

export function initPopups() {
  this._popups = this.add.group();

  this._popups.createMultiple(20, 'popups', 0, false);
  this._popups.forEach(popup => makePopup.call(this, popup));

  this.time.events.add(Phaser.Timer.SECOND * 15, showPopup, this);
}

function makePopup(popup) {
  const text = this.add.bitmapText(0, 0, 'bmp1', '', 32);
  const button = this.add.button(6, 6, 'close1', () => popup.kill());
  popup.addChild(text);
  popup.addChild(button);
}

function showPopup() {
  const popup = this._popups.getFirstDead();
  if (!popup) {
    return;
  }

  popup.reset(
    this.rnd.between(0, 100),
    this.rnd.between(0, 200));
  popup.frame = this.rnd.between(0, 1);

  const text = popup.children[0];
  const ad = ads['popup' + popup.frame];

  text.text = ad.text[this.rnd.between(0, ad.text.length - 1)];
  text.x = ad.x;
  text.y = ad.y;

  this.time.events.add(Phaser.Timer.SECOND * 2, showPopup, this);
}
