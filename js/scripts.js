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
  $('#thirdBack').click(function(e2) {
    e2.preventDefault();
    $('.thirdQuestion').hide();
    $('.secondQuestion').fadeIn();
  })
  $('#thirdSubmit').click(function(e3) {
    e3.preventDefault();
    $('.thirdQuestion').hide();
    $('.fourthQuestion').fadeIn();
  })
  $('#fourthBack').click(function(e2) {
    e2.preventDefault();
    $('.fourthQuestion').hide();
    $('.thirdQuestion').fadeIn();
  })
  $('#fourthSubmit').click(function(e3) {
    e3.preventDefault();
    $('.fourthQuestion').hide();
    $('.fifthQuestion').fadeIn();
  })
  $('#fifthBack').click(function(e4) {
    e4.preventDefault();
    $('.fifthQuestion').hide();
    $('.fourthQuestion').fadeIn();
  })
  $('#fifthSubmit').click(function(e5) {
    e5.preventDefault();
    const firstScore = $('input:radio[name=first]:checked').val();
    const secondScore = $('input:radio[name=second]:checked').val();
    const thirdScore = $('input:radio[name=third]:checked').val();
    tally(firstScore);
    tally(secondScore);
    tally(thirdScore);

    if (js > cs && js > ruby) {
      $('.thirdQuestion').hide();
      $('#cs, #ruby, #survey').hide();
      $('#results').show();
      $('#js').fadeIn();
    } else if (cs > js && cs > ruby) {
      $('.thirdQuestion').hide();
      $('#js, #ruby, #survey').hide();
      $('#results').show();
      $('#cs').fadeIn();
    } else if (ruby > cs && ruby > js) {
      $('.thirdQuestion').hide();
      $('#cs, #js, #survey').hide();
      $('#results').show();
      $('#ruby').fadeIn();
    }



    // $('#survey').hide();
    // $('.intro').fadeIn();
  })
})