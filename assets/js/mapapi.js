let map;

function updateMap(location, zoom) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: zoom
      });
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("failed");
 //     x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
      var pos =  {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
      };
      updateMap(pos, 12);
     // map.setCenter (pos);
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude;
    console.log("Latitude", position.coords.latitude);
    console.log("Longitude", position.coords.longitude);
  }

  getLocation();