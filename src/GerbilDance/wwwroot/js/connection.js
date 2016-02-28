/// <reference path="jquery-2.2.1.min.js" />

$(document).ready(function () {

  //var api = 'http://localhost:5477/';
  // prod
   var api = 'https://blooming-tundra-52992.herokuapp.com/';

  const games = {
    basketball: {
      teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" },
    },
    hockey: {
      teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" }
    }
  };

  //Initialize game
  GetGame();

  function GetGame() {

    ///Always get the leaderboard
    ///If no leaderboard, play game
    $.ajax({
      type: "POST",
      url: api + "register",
      dataType: "json",
      success: function (data) {
        InitializeGame(data.game_type);
        InitializeTeam(data);
        $("#loading").hide();
      },
      error: function (data) {
        $("#error").show();
      }
    });
  }

  function InitializeGame(gameId) {
    $("#game").show();
    $("#" + gameId).show();
  }

  function InitializeTeam(data) {
    var teamName = data.team;
    var gameType = games[data.game_type];
    var teamName = gameType.teams[teamName];
    $("body").addClass("team-" + teamName);
  }

  $("#error").hide();

  $(".see-leaderboard").click(function () {
    $("#game").hide();
    $("#leaderboard").show();
  });
});