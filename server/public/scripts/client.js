var app = angular.module('JokeApp', []);

app.controller('JokeController', ['$http', function ($http) {
  console.log('JokeController is ready to go!');
  var self = this;
  self.jokesArray = [];

  self.getJokes = function () {
    $http({
      method: 'GET',
      url: '/joke'
  }).then(function (response){
      console.log(response);
      console.log(response.data);
      self.jokesArray = response.data;
  })//end GET success
};


self.postNewJoke = function () {
  $http({
    method: 'POST',
    url: '/joke',
    data: self.newJoke
  }).then(function (response){
    console.log(response);
    console.log(response.data);
    self.getJokes();
    
  })
}

self.getJokes();

}]);//end app.controller