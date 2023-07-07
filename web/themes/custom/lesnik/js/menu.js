$(document).ready(function() {
 $( ".cross" ).hide();
  $( ".hamburger" ).click(function() {
    $( "nav > .menu" ).slideToggle( "fast", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
      $("nav > .menu").addClass('active');
    });
  });

  $( ".cross" ).click(function() {
    $( "nav > .menu" ).slideToggle( "fast", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
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
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
          } else {
              $( ".hamburger" ).show();
              $( ".cross" ).hide();
              $( "nav .menu" ).hide();
            } 
     } 
  });
  if ($(window).width() < 1200) {
    $(".menu-item--expanded > a " ).on("click", function(event){
      event.preventDefault();

      $(this).hasClass("active") 
        ? $(this).removeClass('active')
        : $(this).addClass("active")

        if($(this).hasClass("active")){

          $(this).closest("li.menu-item.menu-item--expanded").find("ul.menu").css({"display":"block"})
        }else{
          $(this).closest("li.menu-item.menu-item--expanded").find("ul.menu").css({"display":"none"})
        }
    })
  } 
});
