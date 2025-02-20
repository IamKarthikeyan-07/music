let progress=document.getElementById("progress");
let music=document.getElementById("song");
let playbtn=document.getElementById("play");

music.addEventListener('ended', () => {
    forwardbtn.click();
    });
    

const songname=document.querySelector(".song-name");
const artistname=document.querySelector(".artist-name");

const forwardbtn=document.querySelector(".forward");
const backwardbtn=document.querySelector(".backward");


music.onloadedmetadata=function(){
    progress.max=music.duration;
    progress.value=music.currentTime;
}

function playPause(){
    if(playbtn.classList.contains("fa-pause")){
        music.pause();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
    }
    else{
        music.play();
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
    }
}
music.addEventListener('timeupdate', () => {
    progress.value = music.currentTime;
  });
  
progress.onchange=function(){
    music.play();
    music.currentTime=progress.value;
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}



let currentMusic = 0;
let playing=false

function setMusic(i) {
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;
    songname.innerHTML = song.name;
    artistname.innerHTML = song.artist;
    
    // Reset play/pause button
    if (playing) {
      playbtn.classList.remove("fa-play");
      playbtn.classList.add("fa-pause");
    } else {
      playbtn.classList.remove("fa-pause");
      playbtn.classList.add("fa-play");
    }
  }
  

setMusic(0);

forwardbtn.addEventListener('click', () => {
    if (currentMusic < songs.length - 1) {
        currentMusic++;
        playing=true;
        setMusic(currentMusic);
        }else{
        playing=false;
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");

        }
    });

backwardbtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic= songs.length - 1;
    }else{
        currentMusic--;
    }
    playing=true;
    setMusic(currentMusic);
    music.play();
    
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
    playPause();
    }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
        forwardbtn.click();
        }
        else if (e.code === 'ArrowLeft') {
            backwardbtn.click();
            }
            
        });
            