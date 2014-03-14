define("google-maps.js", function() {
    require("async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false");
    return window.google;
});