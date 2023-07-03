$(document).ready(function() {
 $( ".cross" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });
  $(window).resize(function() {
    if ($(window).width() > 1200) {
        $( ".cross" ).hide();
        $( ".hamburger" ).hide();
        $( ".menu" ).show();
    }else {
      $( ".hamburger" ).show();
      $( ".menu" ).hide();
    }
  });
});
