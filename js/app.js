require('../main.scss')


document.addEventListener("DOMContentLoaded", function() {

// menu opuszczane

var menu = $('.header__left').find("#menu");
var nav = $('.header__left').find("nav");
var toggle = $('.header__left').find("#toggle");

toggle.on('click',function(){
  menu.slideToggle(function () {
    menu.css("visibility", "visible");
  });

});

// animacja x

  toggle.on('mouseover',function() {
    toggle.find(".header__left--bar1").addClass("change_bar1");
    toggle.find(".header__left--bar2").addClass("change_bar2");
    toggle.find(".header__left--bar3").addClass("change_bar3");
    })

  toggle.on('mouseout',function() {
    toggle.find(".header__left--bar1").removeClass("change_bar1");
    toggle.find(".header__left--bar2").removeClass("change_bar2");
    toggle.find(".header__left--bar3").removeClass("change_bar3");
    });




});
