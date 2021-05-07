fetch("https://api.internationalshowtimes.com/v4/cinemas/?location=47.60,-122.33&distance=100&apikey=5ambsfw2ewzFfiYpWQPQct4zgOv3khs8")
.then(response => response.json())
	.then(data => {
    for (var i = 0; i < data.cinemas.length; i++) {
      console.log(data.cinemas[i].location.lon)
      console.log(data.cinemas[i].location.lat)
      console.log(data.cinemas[i].name)

    }
  })
	.catch(err => console.error(err));
  

