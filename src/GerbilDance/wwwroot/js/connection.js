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

    //Enter the code to see the button
    $("#code").on('input', CheckCode);

    function CheckCode() {
        if ($("#code").val() == "team") {
            $("#enterCode").show();
        }
    }

    //Hit the button to enter the game
    $("#enterCode").click(GetGame);

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
        $("#register").hide();

    }

    function InitializeTeam(data) {
        var teamName = data.team;
        var gameType = games[data.game_type];
        var teamName = gameType.teams[teamName];
        $("body").addClass("team-" + teamName);
    }
});

//Hide stuff initially
$(function () {
    $("#game").hide();
    $("#hockey").hide();
    $("#basketball").hide();
    $("#leaderboard").hide();
    $("#loading").hide();
    $("#enterCode").hide();
});