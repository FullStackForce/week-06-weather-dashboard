var apiKey = "28520b03acf80c2f7c2187a997b3f75d";

var city = "";
$("button").on("click", function () {

    var weaterContent = $("#get-weather")
    var running = weaterContent.val()
    city = running

    var dataURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    $.ajax({
        url: dataURL,
        method: "GET"
    }).then(function (response) { 
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var temp = tempF.toFixed(2)

        // print in HTML
        $(".city").html("<h2>Today in " + city + "</h2>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F): " + temp);

    });


})