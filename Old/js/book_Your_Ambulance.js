let autoLocation=document.getElementById('location');

autoLocation.addEventListener("focus", () => {
     if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
     }
})

function onSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // location.value = latitude + ", " + longitude;
    // https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=deec7a3ecbd34f05b9c74b203f44f48a
 fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=deec7a3ecbd34f05b9c74b203f44f48a`)
   .then(response => response.json())
   .then(results => {
        console.log(results);
        let allDetails= results.results[0].components;
        let{county,postcode,city,state,country} = allDetails;
        autoLocation.value = `${county}, ${postcode},${city},${state}  ${country}`;

   })

    autoLocation.value=(latitude + ", " + longitude);
}

function onError(error){
    autoLocation.innerText("Your Browser does not support, Please enter your location manually");
}
