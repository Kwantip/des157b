(function() {
    "use strict";

    const bag = document.querySelector("#bag");

    console.log(Math.floor(Math.random() * 3) + 1);

    $("#demo").endlessRiver({
        pause: false
    })

    $("#bag").on("click", function() {
        $("#popUpImg").attr("src", `images/bag${Math.floor(Math.random() * 3) + 1}.jpg`);
        $("#popUpImg").removeClass("invis");
        $("#popUpImg").addClass("vis");
    });
})();