var landingPageController = {};

landingPageController.show = function() {
  $('#title').addClass('animated bounceIn');
  $('body').one('click', function(){
    $('#title').addClass('animated fadeOutUp');
    $('#userinput').show();
  });
  $('#userinput').on('submit', (function(e) {
    e.preventDefault();
    Card.takeUserInput();
    $('#userinput').addClass('animated bounceOutLeft');
    $('#next').show();
  })
  // $('#f1').addClass('animated fadeInUp'); //beginning of the madness..f1 is the welcome text
  // $('#f2').addClass('animated fadeInDownBig');
  // $('#bg').addClass('animated fadeIn');
  // $('#shade').addClass('animated fadeIn');
);};
landingPageController.show();
