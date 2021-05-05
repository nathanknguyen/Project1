fetch('https://www.amctheatres.com/order/towncenter/12-15-2014/3566?829CD875-54E5-4AAD-A4F4-63FEDE0B8201',{
    headers: {
        'Content-Type': 'application/json',
        "x-amc-key": "829CD875-54E5-4AAD-A4F4-63FEDE0B8201",
        "x-rapidapi-host": "amctheatres.com",
        "useQueryString": true
      }
})
  .then(function(response){
      return response.json();
  })
  .then(function(data){
      console.log(data.result.data)
  })