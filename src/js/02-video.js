import videoplayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new videoplayer(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(CURRENT_TIME_KEY);

function getCurrentTime(event) {
  localStorage.setItem(CURRENT_TIME_KEY, event.seconds);
}

player.on('timeupdate', throttle(getCurrentTime, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}
