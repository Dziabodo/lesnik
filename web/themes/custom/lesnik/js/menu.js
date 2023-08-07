$(document).ready(function() {
 $( ".cross" ).hide();
  $( ".hamburger" ).click(function() {
    $( "nav > .menu" ).slideToggle( "fast", function() {
      $(this).showCross();
      $("nav > .menu").addClass('active');
    });
  });

  $.fn.showHamburger = function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  };

  $.fn.showCross = function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  };

  $( ".cross" ).click(function() {
    $( "nav > .menu" ).slideToggle( "fast", function() {
      $(this).showHamburger()
      $(".menu-item.menu-item--expanded a").removeClass( "active" );
      $(".menu-item.menu-item--expanded .menu").css({"display":"none"});
      $("nav > .menu").removeClass('active');
    });
  });
  $(window).resize(function() {
     if ($(window).width() > 1200) {
       $( ".cross" ).hide();
       $( ".hamburger" ).hide();
       $( "nav .menu" ).show(); 
       $( "nav .menu" ).removeClass( "active" )
       $(".menu-item.menu-item--expanded .menu").css({"display":"none"});
      } else {
          if($("nav .menu").hasClass( "active" )){
            $(this).showCross()
          } else {
            $(this).showHamburger()
              $( "nav .menu" ).hide();
            } 
     } 
  });
  if ($(window).width() < 1200) {
    $(".menu-item--expanded > a " ).on("click", function(event){
      event.preventDefault();

      $(this).toggleClass("active") 

        if($(this).hasClass("active")){
          $(this).closest("li.menu-item.menu-item--expanded").find("ul.menu").css({"display":"block"})
        } else{
          $(this).closest("li.menu-item.menu-item--expanded").find("ul.menu").css({"display":"none"})
        }
    })
  } 
});
