// <!-- Airport Way Service Glass -->
// <!-- created by: Signal Cray Design LLC -->
// <!-- 12 Mar 2015 -->

$(document).ready(function(){


  $(".map-button").click(function(e){
    e.preventDefault();
    if( !$('.map').hasClass("first-view") ) {
      $(".map").hide();
      $('.map').addClass("first-view"); 
      $(".map").css("position", "static");
    }
    $(".map").slideToggle();
  })

  var styleMap = function() {
    $('.map').css("position", "relative");
    $('.map').css("padding-bottom", "75%");
    $('.map').css("height", "0");
    $('.map').css("overflow", "hidden");
    $('.map iframe').css("position", "absolute");
    $('.map iframe').css("top", "0");
    $('.map iframe').css("left", "0");
    $('.map iframe').css("width", "100% !important");
    $('.map iframe').css("height", "100% !important");
  }

});