$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});
//const zipInput = document.querySelector('.zipinput');

// zipInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       console.log('I hit enter');
//       console.log(zipInput.value);
//       const zipCode = zipInput.value;

// //       fetchRestaurants(zipCode, doStuffWithRestaurants);
//     }
// });

// function doStuffWithRestaurants(restaurants) {
//     console.log('insdie script.js')
//     console.log(restaurants);
//     const firstRestaurant = restaurants[0];
//     centerPosition(firstRestaurant.geo.lat, firstRestaurant.geo.lon);
//     const infowindow = new google.maps.InfoWindow();

//     for (var i = 0; i < restaurants.length; i++) {
//         const restaurant = restaurants[i];
//         const marker = addMarker(restaurant.geo.lat, restaurant.geo.lon);

//         marker.addListener('click', function() {
//             console.log(restaurant);
//             // infowindow.setContent(restaurant.restaurant_name);
//             infowindow.setContent(restaurantInfoHtml(restaurant));
//             infowindow.open(map, marker);
//         });
//     }
// }


