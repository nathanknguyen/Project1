fetch('https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/11211',{
    headers: {
        'Content-Type': 'application/json',
        "x-rapidapi-key": "73c4b148d4mshd043ad4720d8a11p1cc295jsn4cdf4a37dc05",
        "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
        "useQueryString": true
      }
})
  .then(response => response.json())
  .then(data => console.log(data));

  var user;
    fetch(url).then