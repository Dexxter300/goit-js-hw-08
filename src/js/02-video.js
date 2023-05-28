import Player from '@vimeo/player';


const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let timeCode = localStorage.getItem("videoplayer-current-time");
if (timeCode == null) {
    timeCode = 0;
}
player.setCurrentTime(timeCode);


player.on('timeupdate', throttle((data) => {
    // console.log(data);
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));



