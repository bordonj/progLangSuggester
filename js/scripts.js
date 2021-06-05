//business logic
let js = 0;
let cs = 0;
let ruby = 0;

function tally(points) {
  if (points === 'js') {
    js++;
  } else if (points === 'cs') {
    cs++;
  } else if (points === 'ruby') {
    ruby++;
  }
}

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
  $('#secondBack').click(function(e2) {
    e2.preventDefault();
    $('.secondQuestion').hide();
    $('.firstQuestion').fadeIn();
  })
  $('#secondSubmit').click(function(e3) {
    e3.preventDefault();
    $('.secondQuestion').hide();
    $('.thirdQuestion').fadeIn();
  })
  $('#thirdBack').click(function(e4) {
    e4.preventDefault();
    $('.thirdQuestion').hide();
    $('.secondQuestion').fadeIn();
  })
  $('#thirdSubmit').click(function(e5) {
    e5.preventDefault();
    $('#survey').hide();
    $('.intro').fadeIn();
  })
})