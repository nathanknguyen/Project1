document.querySelector("#zipcode-btn").addEventListener("click", function(event){
  console.log("click")
  var query = "https://api.openbrewerydb.org/breweries?by_postal="
  var zipcodebox = document.querySelector("#zipcode-input").value
  console.log(zipcodebox)
  query = query + zipcodebox
  console.log(query)
  
  fetch(query)
  .then(function(response){
      return response.json();
  })
  .then(function(data){
    console.log(data)
   // var restaurants = data.result.data
   
    for (var i = 0; i < data.length; i++) { 
      if(data[i].latitude === null){
        continue;
      }
      console.log(data[i].latitude)
      console.log(data[i].longitude)
      console.log(data[i].name)
      console.log(data[i].street)
      console.log(data[i].website_url)


      // var restaurant = document.getElementById('restaurant');
      // var restaurantName = document.createElement('p');
      // var restaurantPhone = document.createElement('p');
      // var restaurantAddress = document.createElement('p')
      
      // restaurant.appendChild(restaurantName);
      // restaurant.appendChild(restaurantPhone);
      // restaurant.appendChild(restaurantAddress)
      
      // restaurantName.textContent = restaurants[i].restaurant_name;
      // restaurantPhone.textContent = restaurants[i].restaurant_phone;
      // restaurantAddress.textContent = restaurants[i].address.formatted;
    
      
    } 
    });

  })



// API Brewries
// text box and button function search by zipcode
document.querySelector("#zipcode-btn").addEventListener("click", function(event){
  console.log("click")
  var query = "https://api.openbrewerydb.org/breweries?by_postal="
  var zipcodebox = document.querySelector("#zipcode-input").value
  query = query + zipcodebox
  console.log(query)
})
// //text box and button function search by state
// document.querySelector("#zipcode-btn").addEventListener("click", function(event){
//   console.log("click")
//   var queryState ="https://api.openbrewerydb.org/breweries?by_state=washington"
//   var zipcodebox = document.querySelector("#zipcode-input").value
//   queryState = queryState + zipcodebox
//   console.log(queryState)
// })
// //text box and button function search by city
// document.querySelector("#zipcode-btn").addEventListener("click", function(event){
//   console.log("click")
//   var queryCity ="https://api.openbrewerydb.org/breweries?by_state=washington"
//   var zipcodebox = document.querySelector("#zipcode-input").value
//   queryCity = queryCity + zipcodebox
//   console.log(queryCity)


// fetch('https://api.openbrewerydb.org/breweries?by_state=washington')
//   .then(response => response.json())
//   .then(data => console.log(data));




//  fetch('https://api.openbrewerydb.org/breweries?by_city=seattle')
//   .then(response => response.json())
  // .then(data => console.log(data));
  
    
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