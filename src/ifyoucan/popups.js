'use strict';

export function initPopups() {
  this._popups = this.add.group();

  this._popups.createMultiple(20, 'popup1', 0, false);
  this._popups.forEach(popup => addButton.call(this, popup));

  this.time.events.add(Phaser.Timer.SECOND * 4, showPopup, this);
}

function addButton(popup) {
  const button = this.add.button(6, 6, 'close1', () => popup.kill());
  popup.addChild(button);
}

export function showPopup() {
  const popup = this._popups.getFirstDead();
  if (!popup) {
    return;
  }

  popup.reset(20, 60);

  this.time.events.add(Phaser.Timer.SECOND * 2, showPopup, this);
}
