(function() {
    "use strict";

    const page = document.querySelector("body");
    const modeChangeBtn = document.getElementById("modeChange");
    const folders = document.querySelectorAll(".folders");
    const openedWindow = document.querySelector("main");
    const windowLabel = document.getElementById("windowLabel");
    const xBtn = document.getElementById("x");
    const catImg = document.getElementById("catImg");

    let mode = "evie";

    // Initial setup
    page.classList = "evie"

    modeChangeBtn.addEventListener("click", switchMode);
    folders[0].addEventListener("click", function() {
        windowLabel.innerHTML = "Ministudios and Toolkit";
        openedWindow.classList = "vis";
    });
    folders[1].addEventListener("click", function() {
        windowLabel.innerHTML = "Research";
        openedWindow.classList = "vis";
    });
    folders[2].addEventListener("click", function() {
        windowLabel.innerHTML = "Development";
        openedWindow.classList = "vis";
    });
    folders[3].addEventListener("click", function() {
        windowLabel.innerHTML = "Capstone";
        openedWindow.classList = "vis";
    });

    function switchMode() {
        if (mode == "evie") {
            mode = "nori";
        } else {
            mode = "evie"
        }
        switch (mode) {
            case "evie":
                page.classList = "evie";
                for (let i = 0; i < folders.length; i++) {
                    folders[i].src = "images/folderEvieMode.png"
                }
                catImg.src = "images/catEvieMode.png";
                break;
            case "nori":
                page.classList = "nori";
                for (let i = 0; i < folders.length; i++) {
                    folders[i].src = "images/folderNoriMode.png"
                }
                catImg.src = "images/catNoriMode.png"
                break;
        }
    }

    xBtn.addEventListener("click", function() {
        openedWindow.classList = "invis";
    });
})();