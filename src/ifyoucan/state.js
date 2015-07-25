'use strict';

export const state = {
  init: init,
  preload: () => undefined,
  create: () => undefined,
  update: () => undefined,
};

function init() {
  const text = this.game.add.text(
    this.world.centerX, this.world.centerY, '…if you can',
    { font: '24px Arial', fill: '#fff', align: 'center' });
  text.anchor.setTo(0.5, 0.5);
}
