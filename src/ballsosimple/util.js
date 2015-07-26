'use strict';

export function prettyTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return seconds < 10 ?
    minutes + ':0' + seconds :
    minutes + ':' + seconds;
}

export function drawText(text, size = 32) {
  const bmp = this.add.bitmapText(
    this.world.centerX, this.world.centerY, 'bmp1', text, size);
  bmp.align = 'center';
  bmp.x -= bmp.width / 2;
  bmp.y -= bmp.height / 2;
  return bmp;
}
