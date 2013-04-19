$(function () {
  var numClocks = 1;
  var clocks = [];

  function updateClocks () {
    var date = new Date();
    for (var i = 0; i < clocks.length; i++) {
      fixme('set each clock to its own respective time')
      clocks[i].setTime(date.getHours(), date.getMinutes());
    }
  }

  for (var i = 0; i < numClocks; i++) {
    fixme('make clocks concentric circles');
    var clock = new Clock(500);

    fixme('set default timezones for clocks');

    fixme('place clocks at center');

    $('body').append(clock.el());
    clocks[i] = clock;
  }

  var date = new Date();
  clocks[0].setTime(date.getHours(), date.getMinutes());
  fixme('set other clocks');

  setInterval(updateClocks, 60000);
});
