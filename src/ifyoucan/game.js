'use strict';

const positions = [48, 144, 240, 336, 432];

export const Game = {

  preload: function() {
    this.stage.backgroundColor = '#007236';
  },

  create: function() {
    this.ball = this.add.sprite(0, 0, 'ball');
    this.basket = this.add.sprite(240, this.world.bounds.bottom - 10, 'basket');
    this.basket.anchor.set(0.5, 1);
    this.basket.currentPos = 2;

    const keys = this.input.keyboard.createCursorKeys();
    keys.right.onUp.add(moveBasket.bind(this, 1));
    keys.left.onUp.add(moveBasket.bind(this, -1));
  },

  update: function() {
    this.ball.y += 1;
  }

};

function moveBasket(indexOffset) {
  let newPos = this.basket.currentPos + indexOffset;
  if (newPos > 4) {
    newPos = 4;
  }
  if (newPos < 0) {
    newPos = 0;
  }

  this.basket.currentPos = newPos;
  this.basket.x = positions[this.basket.currentPos];
}
