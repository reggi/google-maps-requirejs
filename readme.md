# Google Maps Require.js

This is a working example of the google maps api with requirejs using the [async plugin](https://github.com/millermedeiros/requirejs-plugins).

## Can't remove the `google` global

If you add:
        
    google.maps.event.addListenerOnce(map, 'idle', function() {
        delete window.google;
    });

You can see that the map loads, but there are still google files being loaded to the dom, that will look for that var. So the map could get fuzzy, or there could be missing patches of the map.

## Build the javascript

_prereq_ `npm install -g requirejs`

`r.js -o ./src/build.js`