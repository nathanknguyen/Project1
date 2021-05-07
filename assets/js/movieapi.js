function theaterInfoHtml(theater) {
  return `
      <div>
          <h1>${theater.name}</h1>
      </div>
  `
}

function theaterSearch(coords) {
fetch(`https://api.internationalshowtimes.com/v4/cinemas/?location=${coords.coords.latitude},${coords.coords.longitude}&distance=100&apikey=5ambsfw2ewzFfiYpWQPQct4zgOv3khs8`)
.then(response => response.json())
	.then(data => {
    for (var i = 0; i < data.cinemas.length; i++) {
      // console.log(data.cinemas[i].location.lon)
      // console.log(data.cinemas[i].location.lat)
      // console.log(data.cinemas[i].name)
      
      const theater = data.cinemas[i];
      const marker = addMarker(theater.location.lat, theater.location.lon);
      marker.addListener('click', function() {
          const infowindow = new google.maps.InfoWindow();
          console.log(theater);
          infowindow.setContent(theaterInfoHtml(theater));
          infowindow.open(map, marker);
      });

    }
  })
	.catch(err => console.error(err));
}

// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelector("#zipcode-btn").addEventListener("click", function(event){
//     theaterSearch(coords);
//   })})