// JavaScript
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';

// CSS
import "./assets/sass/main.scss";

// TODO: Fix onload issue with navigation item width

$("nav div").on("mouseenter", function () {
    $(this).hasClass("active") ? '' : $(this).removeClass("active");
});

$("nav div").on("mouseleave", function () {
    $(this).hasClass("active") ? '' : $(this).removeClass("active");
});

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

$(window).on("resize", function () {
    navHeight = $("nav #projects").outerHeight();
    navWidth = $("nav #projects").outerWidth() - 1;
    $("#projects-submenu").css({
        "margin-top": navHeight,
        "width": navWidth
    });
});
// Dropdown menu END

// Navigation START
$(".logo").on("click", function () {
    window.location.href = "index.php";
});

$("#home").on("click", function () {
    window.location.href = "index.php";
});

$("#about").on("click", function () {
    window.location.href = "about.php";
});

$("#mariojs").on("click", function () {
    window.location.href = "/mariojs";
});

$("#tictactoe").on("click", function () {
    window.location.href = "project.php?id=tictactoe";
});

$("#calculator").on("click", function () {
    window.location.href = "project.php?id=calculator";
});

$("#puzzle").on("click", function () {
    window.location.href = "project.php?id=puzzle";
});

$("#contact").on("click", function () {
    window.location.href = "contact.php";
});
// Navigation END