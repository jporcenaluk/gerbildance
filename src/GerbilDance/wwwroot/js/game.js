
var api = 'http://localhost:5477/';
// prod
// var api = 'https://blooming-tundra-52992.herokuapp.com/';

var app = angular.module('app', []);

app.controller('GameController', function($http, $interval) {

  self = this;

  self.progress = 0;
  self.startIn = null;
  self.error = false;
  self.loading = false;
  self.inProgress = false;
  self.gameEnded = false;
  self.gameName = null;
  self.team = null;

  const games = {
    breakaway: {
      name: "Break Away!",
      teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" },
    },
    solarsprint: {
      name: "Solar Sprint!",
      teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" }
    }
  };

  // self.loading = true;
  // $http.post(
  //   api + "register",
  //   {}
  // )
  // .then(function(response) {
    var response = {data: {
      "game_type": "breakaway",
      "game_id": "d1155d43-f8cf-4c5f-a13a-d7a439c6535b",
      "team": 2,
      "user_id": "87a40a7b-aba3-43dc-b5f3-e7a870a7bd00",
      "start_in": 0,
      "duration": 45
    }};

    self.loading = false;
    var teamIndex = response.data.team;
    self.gameType = response.data.game_type;
    self.teamName = games[self.gameType].teams[teamIndex];
    self.gameName = games[self.gameType].name;

    self.startIn = response.data.start_in;
    if (response.data.start_in <= 0) {
      self.startIn = 2;
    }

    $interval(function() {
      if (--self.startIn <= 0) {
        self.inProgress = true;
        self.progress++
      }
    }, 1000)

  //   console.log(response)
  // })
  // .catch(function(err) {
  //   self.loading = false;
  //   self.error = true;
  //   switch(err.data.error) {
  //     case 'game has ended':
  //       self.gameEnded = true;
  //     break;
  //   }

  // })



})

