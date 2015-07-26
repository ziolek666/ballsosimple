'use strict';

export const Menu = {

	preload: function() {
		this.soundIntro = this.add.audio('audio-intro',1,true);
	},

  create: function() {
    this.add.sprite(0, 0, 'menu-cover');

    this.soundIntro.play('',0,1,true);

    this.add.button(290, 270, 'menu-start', function(){
    	if(this.soundIntro)
    		this.soundIntro.destroy();
    	this.game.state.start('game');
    }, this);
  }

};
