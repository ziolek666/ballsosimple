'use strict';

const positions = [48, 144, 240, 336, 432];

export const Game = {

  preload: function() {
    this.stage.backgroundColor = '#007236';
  },

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 20;

    this._balls = this.add.group();
    this._balls.createMultiple(30, 'ball', 0, false);

    spawnBall.call(this, this._balls);
    this.time.events.loop(
      Phaser.Timer.SECOND * 2, spawnBall.bind(this, this._balls));

    this._healthbar = this.add.sprite(2, 2, 'healthbar');
    this._healthbar.width = 160;

    this._basket = this.add.sprite(
      240, this.world.bounds.bottom - 10, 'basket');
    this._basket.anchor.set(0.5, 1);
    this._basket.currentPos = 2;
    this.physics.enable(this._basket, Phaser.Physics.ARCADE);
    this._basket.body.allowGravity = false;
    this._basket.body.immovable = true;
    this._basket.body.setSize(72, 13, 0, 0);

    const keys = this.input.keyboard.createCursorKeys();
    keys.right.onUp.add(moveBasket.bind(this, 1));
    keys.left.onUp.add(moveBasket.bind(this, -1));
  },

  update: function() {
    this._balls.forEachAlive(ball => ball.y >= 344 && pop.call(this, ball));
    this.physics.arcade.collide(this._basket, this._balls, save, null, this);
  },

  render: function() {
    //this.balls.forEachAlive(ball => this.game.debug.body(ball), this);
    //this.game.debug.body(this.basket);
  }

};

function moveBasket(indexOffset) {
  this._basket.currentPos = Phaser.Math.clamp(
    this._basket.currentPos + indexOffset, 0, 4);
  this._basket.x = positions[this._basket.currentPos];
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
  const newHealth = this._healthbar.width - 16;
  const tween = this.add.tween(this._healthbar).to(
    {width: newHealth}, 300, Phaser.Easing.Quadratic.InOut, true, 0);
  tween.onComplete.add(end, this);
}

function end() {
  if (this._healthbar.width <= 0) {
    this.state.start('gameover');
  }
}
