$(function () {

    var api = "https://blooming-tundra-52992.herokuapp.com/leaderboard";
    DoLeaderboardPoll();

    function DoLeaderboardPoll() {
        $.ajax({
            url: api,
            success: function (data) {
                //This will be replaced in production
                var number1 = parseInt(Math.random() * 1000);
                var number2 = parseInt(Math.random() * 1000);
                var number3 = parseInt(Math.random() * 1000);
                var number4 = parseInt(Math.random() * 1000);
                var data = {
                    "1": number1,
                    "2": number2,
                    "3": number3,
                    "4": number4
                };

                var dataArray = [data["1"], data["2"], data["3"], data["4"]];

                var max = Math.max.apply(Math, dataArray);

                for (i = 0; i < dataArray.length; i++) {
                    var teamNumber = i + 1;
                    var totalPoints = dataArray[i];
                    var normalizedWidth = (totalPoints / max) * 100;
                    $("#progress-" + teamNumber).css("width", normalizedWidth + "%");
                    $("#team-" + teamNumber + " .team-points").html(totalPoints);
                }

                setTimeout(DoLeaderboardPoll, 2000);

            }
        });
    }

});