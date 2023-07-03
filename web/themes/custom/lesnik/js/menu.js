$(document).ready(function() {
 $( ".cross" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
      $( ".menu" ).addClass( "isActive" )
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
      $( ".menu" ).removeClass( "isActive" )
    });
  });
  $(window).resize(function() {
     if($(".menu").hasClass( "isActive" )){
        $( ".hamburger" ).hide();
        $( ".menu" ).show();
        $( ".cross" ).show();
      } else {
        $( ".hamburger" ).show();
        $( ".cross" ).hide();
        $( ".menu" ).hide();
      }
     if ($(window).width() > 1200) {
       $( ".cross" ).hide();
       $( ".hamburger" ).hide();
       $( ".menu" ).show(); 
       $( ".menu" ).removeClass( "isActive" )
     } 
  });
});
