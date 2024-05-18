$(document).ready(function() {
    $('#submit-btn').click(function() {
        // Get the user's input from the text input field
        var city = $('#city-type').val();

        if (city === "New York" || city === "New York City" || city === "NYC") {
            // Change the background image based on the city name entered by the user
          //  ../images/citipix_skyline.jpg
            $('body').css('background-image', 'url(../images/nyc.jpg)');
        } else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
            $('body').css('background-image', 'url(../images/sf.jpg)');
        } else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
            $('body').css('background-image', 'url(../images/la.jpg)');
        } else if (city === "Austin" || city === "ATX") {
            $('body').css('background-image', 'url(../images/austin.jpg)');
        } else if (city === "Sydney" || city === "SYD") {
            $('body').css('background-image', 'url(../images/sydney.jpg)');
        } else {
            // If the city is not recognized, set a default background or do nothing
            $('body').css('background-image', 'url(../images/citipix_skyline.jpg)');
        }
    });
})
