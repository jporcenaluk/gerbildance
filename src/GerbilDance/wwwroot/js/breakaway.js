
app.controller('BreakAwayController', function($http, $interval) {

  var self = this;

  self.balls = [{},{},{},{}, {}];
  self.balls[1].active = true;

  self.cumulativePoints = 0;
  self.temporaryPoints = 0;

  var pushPoints = function() {

    console.log('pushing: ' + self.temporaryPoints);
    $http({
      method: 'POST',
      url: api + 'points',
      headers: {
        'Content-Type' : 'application/json'
      },
      data : {
        team: team,
        points: self.temporaryPoints
      }
    }).then(
      function(res) {} ,
      function(err) {}
    );

    self.temporaryPoints = 0;
  };

  $interval(function() {

    pushPoints();
  }, 3000)


  self.handleClick = function($i, ball) {
    if (ball.active) {
        delete ball.active;
        self.temporaryPoints++;
        self.cumulativePoints++;
        var newIndex = $i;

        do {
            newIndex = Math.floor(Math.random() * self.balls.length);
        } while (newIndex == $i);

        self.balls[newIndex].active = true;
    }
  }

})
