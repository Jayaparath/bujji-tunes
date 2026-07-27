/*=========================
    BOTTOM NAVIGATION
=========================*/

const navItems = document.querySelectorAll("nav div");

navItems.forEach(item=>{

    item.onclick=()=>{

        navItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    };

});

/*=========================
   PLAY BUTTON
=========================*/

const audio = document.getElementById("audioPlayer");

const playBtn = document.getElementById("playBtn");

const album = document.getElementById("albumArt");

let playing = false;

playBtn.onclick = () => {

    if (!playing) {

        audio.play();

        playBtn.className = "fa-solid fa-circle-pause play";

        album.classList.add("rotate");

    } else {

        audio.pause();

        playBtn.className = "fa-solid fa-circle-play play";

        album.classList.remove("rotate");

    }

    playing = !playing;

};