// <!-- Airport Way Service Glass -->
// <!-- created by: Signal Cray Design LLC -->
// <!-- 12 Mar 2015 -->

$(document).ready(function(){

  var loadMaps = function() {
    $('.small-map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2677.1299229122415!2d-121.96908800000004!3d47.856446999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMain+Street+Glass+201+E+Main+St!5e0!3m2!1sen!2sus!4v1425942345806" width="250" height="350" frameborder="0" style="border:0"></iframe>');
    $('.big-map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2677.1299229122415!2d-121.969088!3d47.856446999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa6f654c5b1e3%3A0x7a2d803ad886e1e1!2sMain+Street+Glass!5e0!3m2!1sen!2sus!4v1424926182298" width="600" height="450" frameborder="0" style="border:0"></iframe>');
  }

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

  var getScreenLayout = function() {
    var result = {};
    if( Foundation.utils.is_large_up() ) {
      console.log("Big screen!");
      result.size = 'large-up';
    }else {
      console.log("Small or medium screen!");
      result.size = 'small-medium'
    }
    return result;
  }

  $(".map-button").click(function(e){
    e.preventDefault();
    var map = '';
    var screenLayout = getScreenLayout();
    if( screenLayout.size == 'small-medium') {
      map = $('.small-map');
      if( $('.big-map').hasClass('open') ) {
        $('.big-map').slideUp();
        $('.big-map').removeClass('open');
      }
    }else {
      map = $('.big-map');
      if( $('.small-map').hasClass('open') ) {
        $('.small-map').slideUp();
        $('.small-map').removeClass('open');
      }
    }
    if( !map.hasClass("first-view") ) {
      map.hide();
      map.addClass("first-view"); 
      map.css("position", "static");
    }
    if( map.hasClass('open') ) {
      map.slideUp();
      map.removeClass('open');
    }else {
      map.slideDown();
      map.addClass('open');
    }
  })

  loadMaps();
  getScreenLayout();

});