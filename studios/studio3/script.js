(function() {
    "use strict";

    const bag = document.querySelector("#bag");

    console.log(Math.floor(Math.random() * 3) + 1);

    $("#bag").on("click", function() {
        imageAlert(`images/bag${Math.floor(Math.random() * 3) + 1}.jpg`);
    });
    $("#basket").on("click", function() {
        imageAlert(`images/basket${Math.floor(Math.random() * 3) + 1}.jpg`);
    });
    $("#couch").on("click", function() {
        imageAlert(`images/couch${Math.floor(Math.random() * 3) + 1}.jpg`);
    });
    $("#tree").on("click", function() {
        imageAlert(`images/tree${Math.floor(Math.random() * 3) + 1}.jpg`);
    });

})();