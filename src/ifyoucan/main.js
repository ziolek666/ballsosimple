'use strict';

import { state } from './state';

window.game = new Phaser.Game(480, 320, Phaser.AUTO, 'game', state);
