var vid = document.getElementById("myVideo");

function playOrPause(){

    if(vid.paused){
        vid.play();
        $("#playBtn").attr("src","pause-btn-01.svg");
    }
    else{
        vid.pause();
        $("#playBtn").attr("src","play-btn-01.svg");
    }
}

var vid2 = document.getElementById("myVideo2");

function play2Pause(){

    if(vid2.paused){
        vid2.play();
        $("#playBtn2").attr("src","pause-btn-01.svg");
    }
    else{
        vid2.pause();
        $("#playBtn2").attr("src","play-btn-01.svg");
    }
}
