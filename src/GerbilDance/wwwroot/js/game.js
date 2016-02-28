
window.api = 'http://localhost:5477/';
// prod
// var api = 'https://blooming-tundra-52992.herokuapp.com/';
window.team = null;

var app = angular.module('app', []);

app.controller('GameController', function($http, $interval) {

  var self = this;

  self.countDown = 0;
  self.progress = 0;
  self.duration = 0;
  self.startIn = 5;
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

  self.loading = true;
  $http.post(
    api + "register",
    {}
  )
  .then(function(response) {
    // var response = {data: {
    //   "game_type": "breakaway",
    //   "game_id": "d1155d43-f8cf-4c5f-a13a-d7a439c6535b",
    //   "team": 2,
    //   "user_id": "87a40a7b-aba3-43dc-b5f3-e7a870a7bd00",
    //   "start_in": 0,
    //   "duration": 45
    // }};

    // set the global team var
    self.loading = false;
    window.team = response.data.team;
    self.gameType = response.data.game_type;
    self.teamName = games[self.gameType].teams[window.team];
    self.gameName = games[self.gameType].name;
    self.countDown = response.data.duration;
    self.duration = response.data.duration;

    if (response.data.start_in >= 0) {
      self.startIn = +response.data.start_in;
    }

    $interval(function() {

      if (--self.startIn <= 0) {
        self.inProgress = true;
        self.progress++;
        self.countDown--;
      }

      if (self.progress >= self.duration) {
        self.inProgress = true;
        self.viewLeaderboard = true;
      }
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

