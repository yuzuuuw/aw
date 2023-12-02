let progress = document.getElementById("progress");
let lagu = document.getElementById("lagu");
let icon = document.getElementById("icon");
lagu.onloadedmetadata = function(){
    progress.max = lagu.duration;
    progress.value = lagu.currentTime;
}

function playPause(){
    if(icon.classList.contains("fa-pause")){
        lagu.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play")
    }else{
        lagu.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
    }
}
 if(lagu.play()){
    setInterval(()=>{
        progress.value = lagu.currentTime;
    },500)
 }

 progress.onchange = function(){
    lagu.play();
    lagu.currentTime = progress.value;
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
 }