// empty for now GHC-2/10/2015

$(document).ready(function(){

  // $(".map").hide();

  // $(".map-button").on('click', function (e) {
  //   if( $(".map").hasClass("showing") ){
  //     hideMap();
  //     $(".map").removeClass("showing");
  //   } else {
  //     showMap();
  //     $(".map").addClass("showing");
  //   }
  // });

  // var hideMap = function () {
  //   $(".map").slideUp();
  // }

  // var showMap = function () {
  //   $(".map").slideDown();
  // }


  $(".map-button").click(function(e){
    e.preventDefault();
    console.log("Button pressed!");
    // $(".map").css("display", "inline");
    $(".map").slideToggle();
    $(".map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2677.1299229122415!2d-121.969088!3d47.856446999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa6f654c5b1e3%3A0x7a2d803ad886e1e1!2sMain+Street+Glass!5e0!3m2!1sen!2sus!4v1424902115031" width="600" height="450" frameborder="0" style="border:0"></iframe>');
  })

});