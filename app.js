
//buttons
const playButton = document.querySelector("#play");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let myRange = document.querySelector(".my-range");
let song = document.querySelector(".audio");

song.onloadedmetadata = function(){
    myRange.max = song.durarion;
    myRange.value = song.currentTime;
}

//tracks
const track1 = document.querySelector("#first");
const track2 = document.querySelector("#second");
const track3 = document.querySelector("#third");

//
let trackIndex = 0;
let isPlaying = false;
let updateTimer;

//playlist
const tracks = [track1, track2, track3];

track1.style.display = "flex"
track2.style.display = "none";
track3.style.display = "none";


nextButton.onclick = function(){
    
    console.log("nextButton works");
};

prevButton.onclick = function(){
    console.log("prevButton works")
}


console.log(playButton.classList)

function playPause(){
    if(playButton.classList.contains("fa-play")){
        song.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
        console.log("play");
    }else{
        song.pause();
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
        console.log("pause");
    }
}

if(song.play()){
    setInterval(() => {
        myRange.value = song.currentTime;
    }, 1000)
}

myRange.onchange = function () {
    song.play();
    song.currentTime = myRange.value;
    playButton.classList.add("fa-pause");
    playButton.classList.remove("fa-play");
}

console.log(playButton.classList)

