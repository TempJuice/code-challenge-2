//console.log('js');


$(document).ready(function () {
  //console.log('JQ');
  $('#addJokeButton').on('click', function () {
    console.log('addJokeButton on click');
    var who = $('#whoseJokeIn').val();
    var question = $('#questionIn').val();
    var punchLine = $('#punchlineIn').val();

    var jokeObject = {
      whoseJoke: who,
      jokeQuestion: question,
      punchLine: punchLine
    };

    $.ajax({
      method: 'POST',
      url: '/joke',
      data: jokeObject,
      success: function (response) {
        getJokes();
      },// end success
      error: function (response){
                console.log( 'in error:', response);
                alert( 'FINISH THE JOKE AND TELL ME WHO\'S JOKE IT IS!!' );
            }// end error
    })//end ajax POST 

  }); // end addJokeButton on click
}); // end doc ready

function getJokes() {
  $.ajax({
    method: 'GET',
    url: '/joke',
    success: function (response) {
      displayJokes(response);
    }
  })//end ajax GET
};// end getJokes()

function displayJokes(joke) {
  console.log(joke);
  $('#outputDiv').empty();
  for (var i = 0; i < joke.length; i++) {
    var element = joke[i];
    $('#outputDiv').prepend(
      '<p>' +
      element.jokeQuestion + '<br>' +
      element.punchLine + '<br></p>' +
      element.whoseJoke + '<br><hr>');

  }


};// end displayResult()
