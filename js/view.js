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
);};

landingPageController.show();
