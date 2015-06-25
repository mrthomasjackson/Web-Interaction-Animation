if(Modernizr.video){
    //browser supports HTML5 Video
    //note the Modernizr.video.* apis return
    //"maybe", "probably" or an empty string
    if(Modernizr.video.webm){
        //browser supports the WebM codec
    }
    else if(Modernizr.video.ogg){
        //browser supports the Ogg Theora codec
    }
    else if(Modernizr.video.h264){
        //browser supports h264 codec
    }else {
        $('#vid').prepend('<img id="theImg" src="../images/backup.jpg" />')
    }
}