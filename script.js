$(document).ready(function(){
    var lat = 0.0;
    var long = 0.0;

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        lat = position.coords.latitude;
        long = position.coords.longitude;
    });

    var url = "http://api.openweathermap.org/data/2.5/weather";
    var data = {
        lat: lat,
        lon: long,
        appid: key
    };

    $.ajax({
        url: url,
        data: data,
        type: "GET",
        success: function(response) {
            console.log(response);
            var weather = response.weather[0].description;
            var location = response.name;
            var fahrenheit = response.main.temp * (9/5) - 459.67;
            var celsius = response.main.temp - 273.15;
            console.log(Math.round(fahrenheit));
            console.log(location);
            console.log(weather);
            var output = "<p>Your current weather is " + weather + "<br>The temperature is " + Math.round(fahrenheit) + "</p>";
            console.log(output);
            $("#weather").html(output);

            $("#celsius").on('click', function(){
                $("#weather").toggle(celsius);
            });
        }
    });

    




});





    


