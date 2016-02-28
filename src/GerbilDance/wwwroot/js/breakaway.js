
app.controller('BreakAwayController', function($http, $interval) {

  var self = this;

  self.balls = [{},{},{},{}, {}];
  self.balls[1].active = true;

  self.points = 0;

  var pushPoints = function() {
    $http({
      method: 'POST',
      url: api + 'points',
      headers: {
        'Content-Type' : 'application/json'
      },
      data : {
        team: team,
        points: self.points
      }
    }).then(
      function(res) {} ,
      function(err) {}
    );
  };

  $interval(function() {

    pushPoints();
  }, 10000)


  self.handleClick = function($i, ball) {
    if (ball.active) {
        delete ball.active;
        self.points++;
        var newIndex = $i;

        do {
            newIndex = Math.floor(Math.random() * self.balls.length);
        } while (newIndex == $i);

        self.balls[newIndex].active = true;
    }
  }

})
