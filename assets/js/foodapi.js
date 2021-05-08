function breweriesInfoHtml(breweries) {
  return `
      <div>
          <h1>${breweries.name}</h1>
      </div>
  `
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#zipcode-btn").addEventListener("click", function(event){
   // console.log("click")
    var query = "https://api.openbrewerydb.org/breweries?by_postal="
    var zipcodebox = document.querySelector("#zipcode-input").value
   // console.log(zipcodebox)
    query = query + zipcodebox
   // console.log(query)
    
    fetch(query)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      //console.log(data)
     // var restaurants = data.result.data
     
      for (var i = 0; i < data.length; i++) { 
        if(data[i].latitude === null){
          continue;
        }
        // console.log(data[i].latitude)
        // console.log(data[i].longitude)
        // console.log(data[i].name)
        // console.log(data[i].street)
        // console.log(data[i].website_url) 
        
        const breweries = data[i];
        console.log(breweries.latitude);
        const marker = addMarker(parseFloat(breweries.latitude), parseFloat(breweries.longitude));
        marker.addListener('click', function() {
            const infowindow = new google.maps.InfoWindow();
            console.log(breweries);
            infowindow.setContent(breweriesInfoHtml(breweries));
            infowindow.open(map, marker);
        });
      } 
      });
  
    })
})
