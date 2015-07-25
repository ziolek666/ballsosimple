'use strict';

import { Boot } from './boot';
import { Preloader } from './preloader';
import { Game } from './game';

const game = new Phaser.Game(480, 320, Phaser.AUTO, 'game');
game.state.add('boot', Boot);
game.state.add('preloader', Preloader);
game.state.add('game', Game);
game.state.start('boot');
