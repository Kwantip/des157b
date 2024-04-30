(function() {
    "use strict";

    const WINDOW_HEIGHT = window.innerHeight;

    const staticArc = document.querySelector(".arc .static");
    const movingArc = document.querySelector(".arc .moving");
    
    console.log(`Viewport Height: ${WINDOW_HEIGHT}`);
    window.onbeforeunload = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    let prevYPos = 0;
    window.addEventListener("scroll", function() {
        // console.log(window.scrollY);
        if (window.scrollY > (3 * WINDOW_HEIGHT)) {
            document.body.style.backgroundColor = "pink";
            // console.log("hi");
            staticArc.style.borderColor = "transparent transparent blue blue"
        } else {
            document.body.style.backgroundColor = "white";
        }
        let rot = (((window.scrollY)/(3 * window.innerHeight)) * 90);
        console.log(rot);
        movingArc.style.transform = `rotate(${rot + 135}deg)`;
        prevYPos = window.screenY;
    });
})();