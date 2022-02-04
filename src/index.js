// JavaScript
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

// CSS
import "./assets/sass/main.scss";

$(function () {
    $(".logo").on("click", function () {
        window.location.href = "index.html";
    });

    $("nav div").on("mouseenter", function () {
        $(this).hasClass("active") ? '' : $(this).removeClass("active");
    });

    $("nav div").on("mouseleave", function () {
        $(this).hasClass("active") ? '' : $(this).removeClass("active");
    });

    // Add "active" class to navigation item
    let page = $("body").attr("id");
    $("nav #" + page).addClass("active");

    // Dropdown menu START

    $("nav #projects, #projects-submenu").on("mouseover", function () {
        $("#projects-submenu").show();
    });

    $("nav #projects, #projects-submenu").on("mouseleave", function () {
        $("#projects-submenu").hide();
    });

    let navHeight = $("nav #projects").outerHeight();
    let navWidth = $("nav #projects").outerWidth() - 1;

    $("#projects-submenu").css({
        "margin-top": navHeight,
        "width": navWidth
    });

    $(window).on("resize", function() {
        navHeight = $("nav #projects").outerHeight();
        navWidth = $("nav #projects").outerWidth() - 1;
        $("#projects-submenu").css({
            "margin-top": navHeight,
            "width": navWidth
        });
    
    })

    // Dropdown menu END
});