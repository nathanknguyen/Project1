fetch("https://api.internationalshowtimes.com/v4/cinemas/?location=47.60,-122.33&distance=100&apikey=5ambsfw2ewzFfiYpWQPQct4zgOv3khs8")
.then(response => response.json())
	.then(data => {
    console.log(data.cinemas[0].location.lon)
    console.log(data.cinemas[0].location.lat)
    console.log(data.cinemas[0].name)
  })
	.catch(err => console.error(err));

