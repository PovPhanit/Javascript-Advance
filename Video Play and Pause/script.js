const btn=document.querySelector(".btn");
const video=document.querySelector("#video");
btn.addEventListener("click",function(){
    if(video.paused){
        video.play();
        btn.innerHTML="Pause";
    }else{
        video.pause();
        btn.innerHTML="Play";
    }
});