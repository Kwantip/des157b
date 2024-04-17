(function() {
    "use strict";

    const lines = document.querySelectorAll(".line");

    const lyrics = {
        start: [0, 0.5, 1, 4, 4.5, 5, 6.5, 8, 9, 9.5, 12.5, 14, 15, 16.5, 17.5, 18, 19, 20.5, 21.5, 22, 24.5],
        stop: [4, 4, 4, 6.5, 6.5, 6.5, 9.5, 9.5, 9.5, 12.5, 15, 15, 16, 19, 19, 19, 22, 22, 22, 26, 26],
        line: lines
    }
    const intervalID = setInterval(checkTime, 1000);
    myVideo.playbackRate = 0.5;

    function checkTime() {
        console.log(parseInt(myVideo.currentTime));

        for (let i = 0; i < lyrics.start.length; i++) {
            if (lyrics.start[i] < myVideo.currentTime && myVideo.currentTime < lyrics.stop[i]) {
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