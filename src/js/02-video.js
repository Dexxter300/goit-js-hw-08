import Player from '@vimeo/player';


const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let info = localStorage.getItem("videoplayer-current-time");
if (info == null) {
    info = 0;
}
console.log(info)
player.setCurrentTime(info);


player.on('timeupdate', throttle((data) => {
    // console.log(data);
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));



