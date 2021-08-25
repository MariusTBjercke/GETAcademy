$(function () {

    // Include header.html and script in <header> tag
    $("header").load("header.html", function () {
        $.getScript("js/header.js");
    });

});