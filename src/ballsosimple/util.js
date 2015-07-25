'use strict';

export function prettyTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return seconds < 10 ?
    minutes + ':0' + seconds :
    minutes + ':' + seconds;
}
