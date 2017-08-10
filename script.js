$(document).ready(function(){
    var lat = 0.0;
    var long = 0.0;
    var tempToggle = true;
    

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
            console.log(Math.round)
            console.log(location);
            console.log(weather);
            var output = "<p>Your current weather is " + weather + "</p>";
            console.log(output);
            $("#weather").html(output);

            $("#toggle").html(Math.round(fahrenheit));

            $("#celsius").click(function(){
                if(tempToggle=false) {
                    $("#toggle").html(Math.round(celsius));
                    tempToggle = true;
                } else {
                    $("#toggle").html(Math.round(fahrenheit));
                    tempToggle = false;
                }
            });



            // $("celsius").on('click', function(){
            // $("#toggle").toggle(function() {
            //     $(this).html(Math.round(fahrenheit));
            // },
            // function() {
            //     $(this).html(Math.round(celsius));
            // }
            // );
            // });
            // $("#celsius").on('click', function(){
            //     $("#celsius").toggle(function() {
            //         ("#toggle").html(Math.round(celsius));
            //     });
            // });
        }
    });

    




});





    


