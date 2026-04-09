// const fa = document.querySelector(".fa-xmark");
// const fa_bars = document.querySelector(".fa-bars");
// const right_bar = document.querySelector(".right-bar");
// let progressBar = document.querySelector(".songprogress");
// const bigPlay = document.querySelector(".fa-play");
// const bigPause = document.querySelector(".fa-pause")
// const song1 = document.querySelector(".song-1");
// const song2 = document.querySelector(".song-2");
// const song3 = document.querySelector(".song-3");
// const song4 = document.querySelector(".song-4");
// const nextSong = document.querySelector(".fa-forward");
// const prevSong = document.querySelector(".fa-backward");

// fa.addEventListener("click", function () {
//     right_bar.classList.add("hidden");

// });

// fa_bars.addEventListener("click", function () {
//     right_bar.classList.remove("hidden");
// })
// console.log("hello")


// // let songIndex = 2;
// const audio = ['1.mp4.m4a', '2.mp4.mp4', '3.mp4.mp4', '4.mp4.mp4'];

// // let songIndex;
// // audio.forEach((element, songIndex) => {
// //     let audioElement = new Audio(`${songIndex}.mp4.mp4`);
// // });
// let songIndex = 0;
// let audioElement = new Audio(audio[songIndex]);


// // let audioElement = new Audio(audio[songIndex]);

// const Playsong = function () {
//     audioElement.play();
//     bigPlay.classList.remove("fa-play")
//     bigPlay.classList.add("fa-pause")
// }

// const Pausesong = function () {
//     audioElement.pause();
//     bigPlay.classList.remove("fa-pause");
//     bigPlay.classList.add("fa-play");
// }

// //Song List
// const song_1 = function () {
//     audioElement.src = audio[0];
//     audioElement.play();
// };


// song1.addEventListener("click", function () {
//     song_1();
// })

// //song--2
// const song_2 = function () {
//     audioElement.src = audio[0];
//     audioElement.play();
// };


// song2.addEventListener("click", function () {
//     song_2();
// })



// //song--3
// const song_3 = function () {
//     audioElement.src = audio[0];
//     audioElement.play();
// };

// song3.addEventListener("click", function () {
//     song_3();
// })

// //song--4


// const song_4 = function () {
//     audioElement.src = audio[0];
//     audioElement.play();
// };





// song4.addEventListener("click", function () {
//     song_4();
// })



// bigPlay.addEventListener("click", function () {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         Playsong();
//     }
//     else {
//         Pausesong();
//     }

// })




// const previous = function () {

//     Playsong();
// };


// //NEXT AND PREVIOUS SONG
// nextSong.addEventListener("click", function () {
//     audioElement.play();
//     songIndex++;
//     Playsong();
// });
// prevSong.addEventListener("click", previous);

// audioElement.addEventListener("timeupdate", () => {
//     console.log("timeupdate")
//     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//     console.log(progress);
//     progressBar.value = progress;
// })

// progressBar.addEventListener("change", () => {
//     audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
// })

const fa = document.querySelector(".fa-xmark");
const fa_bars = document.querySelector(".fa-bars");
const right_bar = document.querySelector(".right-bar");
let progressBar = document.querySelector(".songprogress");
const bigPlay = document.querySelector(".fa-play");
const bigPause = document.querySelector(".fa-pause");
const song1 = document.querySelector(".song-1");
const song2 = document.querySelector(".song-2");
const song3 = document.querySelector(".song-3");
const song4 = document.querySelector(".song-4");
const nextSong = document.querySelector(".fa-forward");
const prevSong = document.querySelector(".fa-backward");

// Hide & Show Menu
fa.addEventListener("click", () => right_bar.classList.add("hidden"));
fa_bars.addEventListener("click", () => right_bar.classList.remove("hidden"));

const audio = ['1.mp4.m4a', '2.mp4.mp4', '3.mp4.mp4', '4.mp4.mp4'];
let songIndex = 0;
let audioElement = new Audio(audio[songIndex]);

// Play/Pause Functions
const Playsong = () => {
    audioElement.play();
    bigPlay.classList.remove("fa-play");
    bigPlay.classList.add("fa-pause");
};

const Pausesong = () => {
    audioElement.pause();
    bigPlay.classList.remove("fa-pause");
    bigPlay.classList.add("fa-play");
};

// Handle song selection
const playSong = (index) => {
    songIndex = index;
    audioElement.src = audio[songIndex];
    Playsong();
};

song1.addEventListener("click", () => playSong(0));
song2.addEventListener("click", () => playSong(1));
song3.addEventListener("click", () => playSong(2));
song4.addEventListener("click", () => playSong(3));

bigPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        Playsong();
    } else {
        Pausesong();
    }
});

// Next & Previous Song
nextSong.addEventListener("click", () => {
    songIndex = (songIndex + 1) % audio.length;
    audioElement.src = audio[songIndex];
    Playsong();
});

prevSong.addEventListener("click", () => {
    songIndex = (songIndex - 1 + audio.length) % audio.length;
    audioElement.src = audio[songIndex];
    Playsong();
});
