(function(){
    'use strict';

    var map = L.map('map').setView([33.8583, -118.0648], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var chsMarker = L.marker([33.863960, -118.065964]).addTo(map);
    chsMarker.on("click", function() {
        chsMarker.bindPopup("My high school").openPopup();
    });
    var cmsMarker = L.marker([33.881130, -118.045170]).addTo(map);
    cmsMarker.on("click", function() {
        cmsMarker.bindPopup("My middle school").openPopup();
    });
    var restaurantMarker = L.marker([33.858080, -118.080440]).addTo(map);
    restaurantMarker.on("click", function() {
        restaurantMarker.bindPopup("My favorite restaurant").openPopup();
    });
}());