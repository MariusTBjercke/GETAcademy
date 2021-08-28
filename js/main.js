$(function () {

    // Include header.html and script in <header> tag
    $("header").load("header.html", function () {
        $.getScript("js/header.js");
    });

    // Slick slider
    if ($(".front-banners").length) {
        $(".front-banners").slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 700,
            autoplay: true,
            autoplaySpeed: 5000,
        })
    }

    // Banner links
    $(".jsgame-link").on("click", function() {
        location.href = "js-game.html";
    })

});