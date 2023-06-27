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
});
