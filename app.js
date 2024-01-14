
//buttons
const playButton = document.querySelector(".play");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

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

track2.style.display = "none";
track3.style.display = "none";


document.addEventListener("click", funv());

function funv(){
    alert("kkkk");
}