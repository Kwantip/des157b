(function() {
    "use strict";

    const WINDOW_HEIGHT = window.innerHeight;

    const body = document.querySelector("body");
    const staticArc = document.querySelector(".arc .static");
    const movingArc = document.querySelector(".arc .moving");
    
    console.log(`Viewport Height: ${window.innerHeight}`);
    let prevYPos = 0;
    window.addEventListener("scroll", function() {
        // console.log(window.scrollY);
        if (window.scrollY % window.innerHeight * 3 == 0) {
            body.style.backgroundColor = "pink";
            // console.log("hi");
            // staticArc.style.borderColor = "red transparent transparent red"
        } else {
            body.style.backgroundColor = "white";
        }
        let rot = (((window.scrollY)/(3 * window.innerHeight)) * 90);
        console.log(rot);
        movingArc.style.transform = `rotate(${rot + 135}deg)`;
        prevYPos = window.screenY;
    });
})();