import videoplayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new videoplayer(iframe);
const CURRENT_TIME_STORAGE_KEY = 'videoplayer-current-time';

function getCurrentTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      return localStorage.setItem(CURRENT_TIME_STORAGE_KEY, seconds);
    })
    .catch(function (error) {
      console.log(error.name);
      console.log(error.message);
    });
}

const timeUpdate = player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentTime = localStorage.getItem(CURRENT_TIME_STORAGE_KEY);

const setCurrentTime = player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(error.name);
        console.log(error.message);
        break;

      default:
        console.log(error.name);
        console.log(error.message);
    }
  });
