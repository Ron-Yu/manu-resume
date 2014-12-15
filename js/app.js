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
    
    /*navigation bar scroll in page*/
     //find the in-page navigatin link
     var navLink = $(".nav-hold a:not(#nav-manu)");
     //click the link
     //scroll the coordinated section to top
     navLink.click(function(event){
       var $this = $(this);
       var $linkItem = $this.attr("href");
       var $linkSection = $($linkItem);
       var $winWidth = $(window).width();
      $("html, body").animate({
        scrollTop: $($linkSection).offset().top-60
      },
      800
       );
       if($winWidth < 768) {
         $("#nav").slideUp(1000);
       }
       event.preventDefault();
     });
     //because of fixed nav bar, you have to make the coordinated section not to hide by it
  
  
  

      /*$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 50) {
         $navBar.addClass('nav-fixed',);
     }
     else {
         $navBar.removeClass('nav-fixed');
     }
});*/


    }); // ready end