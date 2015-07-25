'use strict';

export function initPopups() {
  this._popups = this.add.group();
  this._popups.createMultiple(20, 'popup1', 0, false);
  this.time.events.add(Phaser.Timer.SECOND * 4, showPopup, this);
}

export function showPopup() {
  const popup = this._popups.getFirstDead();
  if (!popup) {
    return;
  }

  popup.anchor.set(0.5);
  popup.reset(200, 200);

  this.time.events.add(Phaser.Timer.SECOND * 2, showPopup, this);
}
