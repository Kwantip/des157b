(function() {
    "use strict";

    const page = document.querySelector("body");
    const modeChangeBtn = document.getElementById("modeChange");
    const folders = document.querySelectorAll(".folders");
    const folderImgs = document.querySelectorAll(".folders img");
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

    // Pet the cat
    catImg.addEventListener("mouseover", function() {
        if (mode == "evie") {
            catImg.src = "images/catEvieModePet.png";
        } else if (mode == "nori") {
            catImg.src = "images/catNoriModePet.png";
        }
    });
    catImg.addEventListener("mouseout", function() {
        if (mode == "evie") {
            catImg.src = "images/catEvieMode.png";
        } else if (mode == "nori") {
            catImg.src = "images/catNoriMode.png";
        }
    });

    // Cat blink
    // setInterval(blink, 5000);
    // function blink() {
    //     catImg.src = "images/catEvieModePet.png";
    // }

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
                for (let i = 0; i < folderImgs.length; i++) {
                    folderImgs[i].src = "images/folderEvieMode.png"
                }
                catImg.src = "images/catEvieMode.png";
                break;
            case "nori":
                page.classList = "nori";
                for (let i = 0; i < folderImgs.length; i++) {
                    folderImgs[i].src = "images/folderNoriMode.png"
                }
                catImg.src = "images/catNoriMode.png"
                break;
        }
        console.log(mode);

    }
    function updateTime() {
        let now = new Date();
        dateDisp.innerHTML = `<p>${now.toLocaleDateString()}</p>`
        timeDisp.innerHTML = `<p>${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>`;
    }
})();