//business logic

//ui logic
$(document).ready(function() {
  $('form#userInfoInput').submit(function(e1) {
    e1.preventDefault();
    $('.intro').hide();
    $('#survey').show();
    $('.firstQuestion').fadeIn();
  })
  $('#firstBack').click(function(e2) {
    e2.preventDefault();
    $('#survey').hide();
    $('.firstQuestion').hide();
    $('.intro').fadeIn();
  })
  $('#firstSubmit').click(function(e3) {
    e3.preventDefault();
    $('.firstQuestion').hide();
    $('.secondQuestion').fadeIn();
  })
})