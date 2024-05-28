(function() {
    "use strict";

    const lines = document.querySelectorAll(".line");
    const focusedLines = document.querySelectorAll(".focused");

    const lyrics = {
        start: [0, 0.5, 1, 4, 4.5, 5, 6.5, 8, 9, 9.5, 12.5, 14, 15, 16.5, 17.5, 18, 19, 20.5, 21.5, 22, 24.5],
        stop: [4, 4, 4, 6.5, 6.5, 6.5, 9.5, 9.5, 9.5, 12.5, 15, 15, 16, 19, 19, 19, 22, 22, 22, 26, 26],
        line: lines
    }
    const intervalID = setInterval(checkTime, 1000);
    backgroundVideo.playbackRate = 0.5;

    for (let i = 0; i < focusedLines.length; i++) {
        focusedLines[i].addEventListener("mouseover", function() {
            backgroundVideo.pause();
            overlayVideo.classList = "showing";
            overlayVideo.src = `medias/vid${i+1}.mp4`;
            overlayVideo.play();
        });
        focusedLines[i].addEventListener("mouseout", function() {
            backgroundVideo.play();
            overlayVideo.classList = "hidden";
            overlayVideo.pause();
        });
        
    }
    overlayVideo.addEventListener("ended", function() {
        overlayVideo.classList = "hidden";
        backgroundVideo.play();
    });


    function checkTime() {
        console.log(parseInt(backgroundVideo.currentTime));

        for (let i = 0; i < lyrics.start.length; i++) {
            if (lyrics.start[i] < backgroundVideo.currentTime && backgroundVideo.currentTime < lyrics.stop[i]) {
                lyrics.line[i].classList.remove("hidden");
                lyrics.line[i].classList.add("showing");
                // console.log(line1);
            } else {
                lyrics.line[i].classList.add("hidden");
                lyrics.line[i].classList.remove("showing");
            }
        }
    }
})();