$(function () {
  var numClocks = 1;
  var clocks = [];


  for (var i = 0; i < numClocks; i++) {
    fixme('make clocks concentric circles');
    var clock = new Clock(500);

    fixme('set default timezones for clocks');

    fixme('place clocks at center');

    $('body').append(clock.el());
    clocks[i] = clock;
  }
});
