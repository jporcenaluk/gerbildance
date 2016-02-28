/// <reference path="jquery-2.2.1.min.js" />

$(document).ready(function () {

    const games = {
        basketball: {
            teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" },

        },
        hockey: {
            teams: { 1: "blue", 2: "silver", 3: "white", 4: "black" }
        }
    }

    //Initialize game
    GetGame();

    function GetGame() {

        ///Always get the leaderboard
        ///If no leaderboard, play game
        $.ajax({
            type: "POST",
            url: "http://private-143c2-dribbledance.apiary-mock.com/register",
            dataType: "json",
            success: function (data) {
                InitializeGame(data.game_type);
                InitializeTeam(data);
                $("#loading").hide();
            },
            error: function (data) {
                alert("failed: " + data);
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

    $(".see-leaderboard").click(function () {
        $("#game").hide();
        $("#leaderboard").show();
    });
});