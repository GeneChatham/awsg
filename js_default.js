// empty for now GHC-2/10/2015

$(document).ready(function(){

  // $(".map").css();

  $(".map-button").click(function(e){
    e.preventDefault();
    console.log("Button pressed!");
    // $(".map").css("display", "inline");
    $(".map").slideToggle();
    // google.maps.event.trigger(map, "resize");
  })

});