(function() {
    "use strict";

    const page = document.querySelector("body");
    const modeChangeBtn = document.getElementById("modeChange");
    const folders = document.querySelectorAll(".folders");
    const openedWindow = document.querySelector("main");
    const windowLabel = document.getElementById("windowLabel");
    const xBtn = document.getElementById("x");
    const catImg = document.getElementById("catImg");
    const dateDisp = document.getElementById("dateDisp");
    const timeDisp = document.getElementById("timeDisp");

    const otherThingy = document.getElementById("otherThingy");

    let mode = "evie";

    // Initial setup
    page.classList = "evie"

    // Date and time
    updateTime();
    setInterval(updateTime, 1000);

    // Switch mode button
    modeChangeBtn.addEventListener("click", switchMode);

    // Open pop-up window
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
    // Close pop-up window
    xBtn.addEventListener("click", function() {
        openedWindow.classList = "invis";
    });

    function switchMode() {
        if (mode == "evie") {
            mode = "nori";
            otherThingy.classList = "noriMode";
        } else {
            mode = "evie"
            otherThingy.classList = "evieMode";
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
    function updateTime() {
        let now = new Date();
        dateDisp.innerHTML = `<p>${now.toLocaleDateString()}</p>`
        timeDisp.innerHTML = `<p>${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>`;
    }
})();