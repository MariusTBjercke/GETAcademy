$(function() {

    // Logo and navigation functionalities

    $(".logo").on("click", function() {
        window.location.href = "index.html";
    });

    $("nav div").on("mouseenter", function() {
        $("nav .active").css({
            "background-color": "inherit",
            "color": "#838383"
        });
    });

    $("nav .active").on("mouseenter", function() {
        $("nav .active").css({
            "background-color": "#dd7d00",
            "color": "#1d1d1d"
        });
    });

    $("nav div").on("mouseleave", function() {
        $("nav .active").css({
            "background-color": "#dd7d00",
            "color": "#1d1d1d"
        });
    });

    // Other

    // TODO: Add stuff I guess

});