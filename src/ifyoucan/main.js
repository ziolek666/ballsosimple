'use strict';

import { Boot } from './boot';

const game = new Phaser.Game(480, 320, Phaser.AUTO, 'game');
game.state.add('boot', Boot);
game.state.start('boot');
