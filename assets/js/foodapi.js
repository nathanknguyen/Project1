fetch('https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/98188',{
    headers: {
        'Content-Type': 'application/json',
        "x-rapidapi-key": "73c4b148d4mshd043ad4720d8a11p1cc295jsn4cdf4a37dc05",
        "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
        "useQueryString": true
      }
})
  .then(function(response){
      return response.json();
  })
  .then(function(data){
    console.log(data.result.data)
    var restaurants = data.result.data
    for (var i = 0; i < restaurants.length; i++) {
    
      var restaurant = document.getElementById('restaurant');
      var restaurantName = document.createElement('p');
      var restaurantPhone = document.createElement('p');
      var restaurantAddress = document.createElement('p')
      
      restaurant.appendChild(restaurantName);
      restaurant.appendChild(restaurantPhone);
      restaurant.appendChild(restaurantAddress)
      
      restaurantName.textContent = restaurants[i].restaurant_name;
      restaurantPhone.textContent = restaurants[i].restaurant_phone;
      restaurantAddress.textContent = restaurants[i].address.formatted;
      
      
    } 
    });
    
    //   }
    //     console.log(restaurants[i].address.city)
    //     console.log(restaurants[i].address.formatted)
    //     console.log(restaurants[i].hours)
    //     console.log(restaurants[i].restaurant_name)
    //     console.log(restaurants[i].restaurant_phone)
    //     console.log(restaurants[i].cuisines)
    //     console.log(restaurants[i].price_range)
    //     console.log(restaurants[i].geo)

// var restAddressCity = restaurants[i].address.city       
// var restAddressCity = document.createElement('tag');
// var restHours = document.createElement('tag');
// var restPhone = document.createElement('tag');
// var restName = document.createElement('tag');
// var restPrice = document.createElement('tag');
// var restGeo = document.createElement('tag');
// var restAddressFormat = document.createElement('tag');
// userName.textContent = data[i].user.login;
// issueTitle.textContent = data[i].title;
// issueContainer.append(userName);
// issueContainer.append(issueTitle);
    

    
    
    
    // data.checkRestaurant = function (){
      //     return data = document.getElementById ('');
      // };
      
      