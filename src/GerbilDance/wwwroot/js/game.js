
var api = 'http://localhost:5477/';
// prod
// var api = 'https://blooming-tundra-52992.herokuapp.com/';

var app = angular.module('app', []);

app.controller('GameController', function($http) {

  self = this;

  self.error = false;
  self.loading = false;
  self.gameStarted = false;
  self.gameEnded = false;
  self.team = null;

  const games = {
    breakaway: {
      teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" },
    },
    solarsprint: {
      teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" }
    }
  };

  self.loading = true;
  $http.post(
    api + "register",
    {}
  )
  .then(function(response) {
    self.loading = false;
    var teamIndex = response.data.team;
    self.gameType = response.data.game_type;
    self.teamName = games[self.gameType].teams[self.teamIndex];

    if (response.data.start_in <= 0) {
      self.startIn = 5;
    }

    var startInInterval = setInterval(function() {
      self.startIn--;
    }, 1000)

    console.log(response)
  })
  .catch(function(err) {
    self.loading = false;
    self.error = true;
    switch(err.data.error) {
      case 'game has ended':
        self.gameEnded = true;
      break;
    }

  })



})

