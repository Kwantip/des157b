(function() {
    "use strict";

    const WINDOW_HEIGHT = window.innerHeight;

    const staticArc = document.querySelector(".arc .static");
    const movingArc = document.querySelector(".arc .moving");
    const infoBtn = document.querySelector("#info");
    const infoPopUp = document.querySelector("#popUp");
    const xBtn = document.querySelector("#popUp i");
    const timeDisp = document.querySelector("#content #time");
    const numDisp = document.querySelector("#content #num");
    const moodDisp = document.querySelector("#content #mood");
    const moodFaceDisp = document.querySelector("#content #mood #face");
    const moodDescDisp = document.querySelector("#content #mood #description")

    let globalData;

    console.log(`Viewport Height: ${WINDOW_HEIGHT}`);
    window.onbeforeunload = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    async function getData() {
        const myMoods = await fetch('data.json');
        const data = await myMoods.json();
        console.log(data)
        globalData = Object.values(data);
        console.log(data[0].time)
    }
    getData();
    console.log(globalData)
    infoBtn.addEventListener("click", function() {
        infoPopUp.classList = "vis";
    });
    xBtn.addEventListener("click", function() {
        infoPopUp.classList = "invis";
    })
    window.addEventListener("scroll", function() {
        // console.log(window.scrollY);
        let scrollPosTracker = Math.floor(window.scrollY / WINDOW_HEIGHT);
        let dataPointTracker = Math.floor(scrollPosTracker / 3);
        // console.log(`Scroll Position Tracker: ${scrollPosTracker}`);
        // console.log(`Other thingy: ${dataPointTracker}`)

        switch (scrollPosTracker) {
            case 0:
            case 3:
            case 6:
            case 9:
            case 12:
            case 15:
            case 18:
            case 21:
                showTime(dataPointTracker, globalData);
                break;
            case 1:
            case 4:
            case 7:
            case 10:
            case 13:
            case 16:
            case 19:
            case 22:
                showNum(dataPointTracker, globalData);
                break;
            case 2:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "gray gray rgb(255, 209, 27) gray";
                break;
            case 5:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "gray gray rgb(255, 209, 27) rgb(255, 209, 27)";
                break;
            case 8:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "rgb(255, 209, 27) gray rgb(255, 209, 27) rgb(255, 209, 27)";
                break;
            case 11:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "rgb(255, 209, 27) rgb(255, 209, 27) rgb(255, 209, 27) rgb(255, 209, 27)";
                break;
            case 14:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "rgb(255, 209, 27) rgb(255, 209, 27) gray rgb(255, 209, 27)";
                break;
            case 17:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "rgb(255, 209, 27) rgb(255, 209, 27) gray gray";
                break;
            case 20:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "gray rgb(255, 209, 27) gray gray";
                break;
            case 23:
                showMood(dataPointTracker, globalData);
                staticArc.style.borderColor = "gray gray gray gray";
                break;
            default:
                console.log("BREH");
                break;
        }
        if (scrollPosTracker <= 11) {
            movingArc.style.borderColor = "transparent transparent rgb(255, 209, 27) transparent";
        } else {
            movingArc.style.borderColor = "transparent transparent gray transparent";
        }

        // Moving the arc
        let rot = (((window.scrollY)/(3 * window.innerHeight)) * 90);
        movingArc.style.transform = `rotate(${rot + 135}deg)`;

        changeBackground(dataPointTracker, globalData);
    });
    function changeBackground(point, data) {
        switch (data[point].mood) {
            case 0: // Meh
                document.body.style.backgroundColor = "rgb(209, 209, 209)";
                break;
            case 1: // Panicked
                document.body.style.backgroundColor = "rgb(255, 155, 148)";
                break;
            case 2: // Relieved
                document.body.style.backgroundColor = "rgb(155, 221, 250)";
                break;
            case 3: // Focused
                document.body.style.backgroundColor = "rgb(209, 156, 255)";
                break;
            case 4: // Frustrated
                document.body.style.backgroundColor = "rgb(230, 175, 135)";
                break;
            default:
                document.body.style.backgroundColor = "white";
                break;
        }
    }
    function showTime(point, data) {
        // Change the value
        timeDisp.innerHTML = `<p id="time">${data[point].time}</p>`;

        // Adjust the visibility
        timeDisp.classList = "vis";
        numDisp.classList = "invis";
        moodDisp.classList = "invis";
    }
    function showNum(point, data) {
        // Change the value
        numDisp.innerHTML = `<p id="num">${data[point].num}</p>`;

        // Adjust the visibility
        timeDisp.classList = "invis";
        numDisp.classList = "vis";
        moodDisp.classList = "invis";
    }
    function showMood(point, data) {
        const fontAwesomeFaces = [
            '<i class="fa-solid fa-face-meh"></i>',
            '<i class="fa-solid fa-face-flushed"></i>',
            '<i class="fa-solid fa-face-grin-beam-sweat"></i>',
            '<i class="fa-solid fa-face-grin"></i>',
            '<i class="fa-solid fa-face-tired"></i>'
        ]
        // Change the value
        console.log(data[point].mood)
        moodFaceDisp.innerHTML = fontAwesomeFaces[data[point].mood];
        moodDescDisp.innerHTML = `<p id="description">${data[point].description}</p>`

        // Adjust the visibility
        timeDisp.classList = "invis";
        numDisp.classList = "invis";
        moodDisp.classList = "vis";
    }
})();