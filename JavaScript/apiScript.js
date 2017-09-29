'use strict';

$(window).ready(function() {
    var apiKey = "J1UJSXTYWFSS069W";
    var apiLink = "http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=";
    var api = apiLink + apiKey;

    $.getJSON(api, function(data) {
        var stockName = data.metadata.symbol;
        console.log(stockName);
        console.log("hello");
    });


});