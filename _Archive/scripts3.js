var vid = document.getElementById("myVideo");

function playOrPause(){

    if(vid.paused){
        vid.play();
        $("#playBtn").attr("src","pause-btn-02.svg");
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
        $("#playBtn2").attr("src","pause-btn-020.svg");
    }
    else{
        vid2.pause();
        $("#playBtn2").attr("src","play-btn-010.svg");
    }
}

var vid3 = document.getElementById("myVideo3");

function play3Pause(){

    if(vid3.paused){
        vid3.play();
        $("#playBtn3").attr("src","pause-btn-020.svg");
    }
    else{
        vid3.pause();
        $("#playBtn3").attr("src","play-btn-010.svg");
    }
}
