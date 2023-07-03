function p(){
    var v=document.getElementById("video");
    // var u=document.getElementById("audio");
    if(video.paused){
        // u.play();
        v.play();
    }
    else{
        v.pause();
        // u.pause();
    }
}