//business logic
let js = 0;
let cs = 0;
let ruby = 0;

function tallyAll(arr) {
  for (let score of arr) {
    if (score === 'js') {
      js++;
    } else if (score === 'cs') {
      cs++;
    } else if (score === 'ruby') {
      ruby++;
    }
  }
}

//ui logic
$(document).ready(function() {
  let userName;
  let userEmail;
  $('form#userInfoInput').submit(function(e1) {
    e1.preventDefault();
    userName = $('input#fullName').val();
    userEmail = $('input#email').val();

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
  $('#secondBack').click(function(e4) {
    e4.preventDefault();
    $('.secondQuestion').hide();
    $('.firstQuestion').fadeIn();
  })
  $('#secondSubmit').click(function(e5) {
    e5.preventDefault();
    $('.secondQuestion').hide();
    $('.thirdQuestion').fadeIn();
  })
  $('#thirdBack').click(function(e6) {
    e6.preventDefault();
    $('.thirdQuestion').hide();
    $('.secondQuestion').fadeIn();
  })
  $('#thirdSubmit').click(function(e7) {
    e7.preventDefault();
    $('.thirdQuestion').hide();
    $('.fourthQuestion').fadeIn();
  })
  $('#fourthBack').click(function(e8) {
    e8.preventDefault();
    $('.fourthQuestion').hide();
    $('.thirdQuestion').fadeIn();
  })
  $('#fourthSubmit').click(function(e9) {
    e9.preventDefault();
    $('.fourthQuestion').hide();
    $('.fifthQuestion').fadeIn();
  })
  $('#fifthBack').click(function(e10) {
    e10.preventDefault();
    $('.fifthQuestion').hide();
    $('.fourthQuestion').fadeIn();
  })
  $('form#survey').submit(function(e11) {
    e11.preventDefault();
    const firstScore = $('input:radio[name=first]:checked').val();
    const secondScore = $('input:radio[name=second]:checked').val();
    const thirdScore = $('input:radio[name=third]:checked').val();
    const fourthScore = $('input:radio[name=fourth]:checked').val();
    const fifthScore = $('input:radio[name=fifth]:checked').val();

    let totalScore = [firstScore, secondScore, thirdScore, fourthScore, fifthScore];

    tallyAll(totalScore);
    $('.userName').text(userName);
    $('.userEmail').text(userEmail);


    if (js > cs && js > ruby) {
      $('.fifthQuestion').hide();
      $('#cs, #ruby, #survey').hide();
      $('#results').show();
      $('#js').fadeIn();
    } else if (cs > js && cs > ruby) {
      $('.fifthQuestion').hide();
      $('#js, #ruby, #survey').hide();
      $('#results').show();
      $('#cs').fadeIn();
    } else if (ruby > cs && ruby > js) {
      $('.fifthQuestion').hide();
      $('#cs, #js, #survey').hide();
      $('#results').show();
      $('#ruby').fadeIn();
    } else {
      $('.fifthQuestion').hide();
      $('#cs, #js, #ruby, #survey').hide();
      $('#results').show();
      $('#any').fadeIn();
    }
  })
})