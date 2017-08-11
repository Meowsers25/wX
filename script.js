$(document).ready(function () {
    var lat = 0.0;
    var long = 0.0;
    var tempToggle = true;
    var fahrenheit = 0;
    var celsius = 0;
    


    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        lat = position.coords.latitude;
        long = position.coords.longitude;
        dammit();
    });


    function dammit() {
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
            success: function (response) {
                console.log(response);
                var weather = response.weather[0].main;
                var location = response.name;
                fahrenheit = response.main.temp * (9 / 5) - 459.67;
                celsius = response.main.temp - 273.15;
                var icon = response.weather[0].icon;

                console.log(Math.round(fahrenheit));
                console.log(Math.round)
                console.log(location);
                console.log(weather);
                var output = "<p>The current weather in " + location + " is " + weather + "</p>";
                console.log(output);
                $("#weather").html(output);
               
                $("#toggle").html('Current temperature: ' + Math.round(fahrenheit)+ 'F');
            }
        });
    }
    $("#celsius").click(function () {
        if (tempToggle) {
            $("#toggle").html('Current temperature: ' + Math.round(celsius) + 'C');
            tempToggle = false;
        } else {
            $("#toggle").html('Current temperature: ' + Math.round(fahrenheit) + 'F');
            tempToggle = true;
        }
    });
    

});