(function() {
    "use strict";

    $("#truck").on("click", function() {
        infoAlert("Truck", "");
    });
    $("#car").on("click", function() {
        infoAlert("Car", "Urban sprawls refers to rapid, outward expansions of cities and towns, often of low-density housing zones. This makes cars a necessity rather than a choice. However, not everyone can afford to buy a car. This, coupled with a lack of good public transportations, means limited means to access resources and amenities for underserved communities.");
    });
    $("#disabledParking").on("click", function() {
        infoAlert("Disability", "Not everyone physically have the ability to drive for reason ranging from age to disabilities.");
    });
    $("#speedLimit").on("click", function() {
        infoAlert("Speed Limit", "In 2021, around 7,388 pedestrians died and approximately 60,577 were injured in traffic accidents. Furthermore, 75% of those fatalities occured on roads with speed limit of 30 or more");
    });
    $("#bus").on("click", function() {
        infoAlert("Public Transportation", "Americans highly rely on cars meaning more spaces and resources are allocated for cars and car infrastructures. This means less resources and space for public transportations. Yet, public transportations are better than private cars in every aspects.");
    });
})();