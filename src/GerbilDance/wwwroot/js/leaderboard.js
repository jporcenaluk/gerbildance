$(function () {

    var api = "https://blooming-tundra-52992.herokuapp.com/leaderboard";
    DoLeaderboardPoll();

    var startIn = null;
    var countDown = null;

    function DoLeaderboardPoll() {
        $.ajax({
            url: api,
            success: function (data) {
                ////This will be replaced in production
                //var number1 = parseInt(Math.random() * 1000);
                //var number2 = parseInt(Math.random() * 1000);
                //var number3 = parseInt(Math.random() * 1000);
                //var number4 = parseInt(Math.random() * 1000);
                //var data = {
                //    "1": number1,
                //    "2": number2,
                //    "3": number3,
                //    "4": number4
                //};

                //if (startIn === null) {
                //    startIn = data.start_in;
                //    countDown = data.duration;
                 
                //    setInterval(function() {

                //        countDown--;


                //        if (countDown <= 0) {
                //            //Make page say game over in white box
                //            $(".time-left").html("Game Over");
                //        }
                //        else {
                //            //Update timer with progress
                //            var html = "0:" + ((countDown < 10) ? "0" + countDown : countDown);

                //            $(".time-left").html(html);
                //        }

                //    }, 1000);
                //}
               
                data = data.leaderboard;
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