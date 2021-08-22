$(function() {

    // Logo and navigation functionalities START

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

    // Dropdown menu START

    $("#spill, #spill-submenu").on("mouseover", function() {
        $("#spill-submenu").show();
    });

    $("#spill, #spill-submenu").on("mouseleave", function() {
        $("#spill-submenu").hide();
    });

    var headerHeight = $("#spill").height() - 1;

    $("#spill-submenu").css({
        "margin-top": headerHeight,
    });

    // Dropdown menu END

    // Logo and navigation END

});