define("main", function() {
    var $ = require("jquery");
    var google = require("./google-maps.js");
    $(document).ready(function() {
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 11,
            center: new google.maps.LatLng(40.670287895547006, -73.9865255355835)
        });
        /*
        google.maps.event.addListenerOnce(map, 'idle', function() {
            delete window.google;
        });
        */
    });
});

require(["main"]);