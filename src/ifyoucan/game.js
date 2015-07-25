'use strict';

const positions = [48, 144, 240, 336, 432];

export const Game = {

  preload: function() {
    this.stage.backgroundColor = '#007236';
  },

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 20;

    this.basket = this.add.sprite(240, this.world.bounds.bottom - 10, 'basket');
    this.basket.anchor.set(0.5, 1);
    this.basket.currentPos = 2;
    this.physics.enable(this.basket, Phaser.Physics.ARCADE);
    this.basket.body.allowGravity = false;
    this.basket.body.immovable = true;
    this.basket.body.setSize(72, 13, 0, 0);

    this.balls = this.add.group();
    this.balls.createMultiple(30, 'ball', 0, false);

    spawnBall.call(this, this.balls);
    this.time.events.loop(
      Phaser.Timer.SECOND * 2, spawnBall.bind(this, this.balls));

    const keys = this.input.keyboard.createCursorKeys();
    keys.right.onUp.add(moveBasket.bind(this, 1));
    keys.left.onUp.add(moveBasket.bind(this, -1));
  },

  update: function() {
    this.balls.forEachAlive(ball => ball.y >= 344 && pop(ball));
    this.physics.arcade.collide(this.basket, this.balls, save, null, this);
  },

  render: function() {
    this.balls.forEachAlive(ball => this.game.debug.body(ball), this);
    this.game.debug.body(this.basket);
  }

};

function moveBasket(indexOffset) {
  this.basket.currentPos = Phaser.Math.clamp(
    this.basket.currentPos + indexOffset, 0, 4);
  this.basket.x = positions[this.basket.currentPos];
}

function spawnBall(group) {
  const ball = group.getFirstDead();
  if (!ball) {
    return;
  }

  this.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.anchor.set(0.5);
  ball.reset(positions[this.rnd.integerInRange(0, 4)], 0 - 24);
}

function save(basket, ball) {
  ball.kill();
}

function pop(ball) {
  ball.kill();
}
