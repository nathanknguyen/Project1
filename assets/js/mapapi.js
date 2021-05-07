let map;

function updateMap(location, zoom) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: zoom
    });
}

function initMap() {
    console.log(this);
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(centerPosition);
        console.log(navigator.geolocation.getCurrentPosition);
        navigator.geolocation.getCurrentPosition(theaterSearch);
    } else {
        console.log("failed");
        //     x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function centerPosition(coordinates) {
    var pos = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
    };
    updateMap(pos, 14);
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
    });
    // map.setCenter (pos);
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude;
    // console.log("Latitude", lat);
    // console.log("Longitude", lon);
}

function addMarker(lat, lon) {
    var pos = {
        lat: lat,
        lng: lon,
    };
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
    });

    return marker;
}

getLocation();
