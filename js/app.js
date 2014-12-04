$(document).ready(function () {
    var $navBar = $(".nav-bar");
    var $navManu = $(".nav-manu");
    var $navList = $(".nav-list");
    var $winW = $(window).width();
    var $project1 = $(".project1");
    var $projectRotate = $(".projectRotate")
    
    $navManu.click(function (evt) {
      $navList.stop().slideToggle(600);
      evt.preventDefault();
    }); // click end
    
    $projectRotate.hide();
    $project1.hover(function(){
      $projectRotate.stop().fadeToggle(2000);
    });

      /*$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 50) {
         $navBar.addClass('nav-fixed',);
     }
     else {
         $navBar.removeClass('nav-fixed');
     }
});*/


    }); // ready end