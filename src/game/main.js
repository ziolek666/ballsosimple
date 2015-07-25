var state = {
  init: function() {
    var text = game.add.text(
      this.world.centerX, this.world.centerY, '…if you can',
      { font: "24px Arial", fill: "#fff", align: "center" });
    text.anchor.setTo(0.5, 0.5);
  },
  preload: function() {
  },
  create: function(){
  },
  update: function() {
  }
};

var game = new Phaser.Game(
  480,
  320,
  Phaser.AUTO,
  'game',
  state
);
