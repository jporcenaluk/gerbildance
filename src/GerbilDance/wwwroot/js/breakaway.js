
app.controller('BreakAwayController', function($http, $interval) {

  self = this;

  self.balls = [{},{},{},{}];
  self.balls[1].active = true;

  var points = 0;

  self.handleClick = function($i, ball) {
    if (ball.active) {
        delete ball.active;

        var newIndex = $i;

        do {
            newIndex = Math.floor(Math.random() * self.balls.length);
        } while (newIndex == $i);

        self.balls[newIndex].active = true;
    }
  }

})
